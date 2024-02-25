import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSearchService } from '../service/google-search.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
selectLocation(arg0: string) {
  console.log(arg0);
  
}
  sugestions!: Google;
  input!:string;
 

  constructor(private router:Router,private googleSearch:GoogleSearchService){}

  googleautocomplete(){
    this.googleSearch.findLocation(this.input).subscribe(res=>{
      this.sugestions=res;
      console.log(this.sugestions);
      
    });
  }


searchParking() {
this.router.navigate(['/searchresult/parkinglist']);
}
  onSubmit(){
    console.log("Submitted");
  }

}

export interface Google {
  predictions: Prediction[]
  status: string
}

export interface Prediction {
  description: string
  matched_substrings: MatchedSubstring[]
  place_id: string
  reference: string
  structured_formatting: StructuredFormatting
  terms: Term[]
  types: string[]
}
export interface MatchedSubstring {
  length: number
  offset: number
}

export interface StructuredFormatting {
  main_text: string
  main_text_matched_substrings: MainTextMatchedSubstring[]
  secondary_text: string
}

export interface MainTextMatchedSubstring {
  length: number
  offset: number
}

export interface Term {
  offset: number
  value: string
}
