import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  stripePromise = loadStripe(environment.stripe);
  clientSecret: string = "";
  stripe: any;
  card: any;
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      amount: 99900,
      quantity: '1'
    };


  this.http
  .post(`${environment.serverUrl}`, payment)
  .subscribe(async (data: any) => {
    const stripe = await this.stripePromise;
    if (stripe) {
      stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
    }else{
      console.log("test")
    }
  });
  }



async createPaymentIntent() {
  // Make a request to your backend to create a PaymentIntent
  const response = await this.http.post<{ clientsecret: string }>('/api/payment/create-payment-intent', { amount: 1000 }).toPromise();
  const { setupIntent, error } = await this.stripe.confirmCardPayment(this.clientSecret || '', {
  payment_method: {
    card: this.card,
    billing_details: {
      name: 'John Doe',
    },
  },
});


  if (error) {
    console.error(error);
  } else {
    if (setupIntent) {
      // Handle setup success, e.g., save the setupIntent.id
      console.log(setupIntent);
    } else {
      // Handle payment success
      console.log('Payment success');
    }
  }
}

async onSubmit() {
    // Create PaymentIntent and confirm the payment
    await this.createPaymentIntent();
    this.http.post('/api/payment/confirm-payment', { clientSecret: this.clientSecret }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
}



}