import { Component } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {

  selectedMonth: string = 'mar';
  // Sales Overview
  months = [
    { value: 'jan', viewValue: 'January' },
    { value: 'feb', viewValue: 'February' },
    { value: 'mar', viewValue: 'March' },
    { value: 'apr', viewValue: 'April' },
    { value: 'may', viewValue: 'May' },
    { value: 'jun', viewValue: 'June' },
    { value: 'jul', viewValue: 'July' },
    { value: 'aug', viewValue: 'August' },
    { value: 'sep', viewValue: 'September' },
    { value: 'oct', viewValue: 'October' },
    { value: 'nov', viewValue: 'November' },
    { value: 'dec', viewValue: 'December' }
  ];

  // Yearly Breakup
  yearlyChart = {
    series: [
      { name: '2022', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
      { name: '2023', data: [45, 52, 38, 24, 33, 60, 70, 91, 75] }
    ],
    dataLabels: { enabled: false },
    chart: { type: 'bar', height: 300 },
    legend: { show: true },
    colors: ['#5e72e4', '#11cdef'],
    stroke: { width: 0 },
    tooltip: { enabled: true },
    plotOptions: { bar: { horizontal: false } },
    responsive: [
      { breakpoint: 480, options: { legend: { position: 'bottom' } } }
    ]
  };

  // Monthly Earnings
  monthlyChart = {
    series: [{ name: 'Earnings', data: [10, 30, 15, 45, 25, 50, 20] }],
    dataLabels: { enabled: false },
    chart: { type: 'area', height: 160 },
    legend: { show: false },
    colors: ['#2dce89'],
    stroke: { width: 2, colors: ['#2dce89'] },
    tooltip: { enabled: true },
    plotOptions: { area: { strokeWidth: 0 } },
    responsive: [
      { breakpoint: 480, options: { legend: { position: 'bottom' } } }
    ]
  };

  // Recent Transactions
  stats = [
    { time: '9:30 AM', color: 'success', subtext: 'Transaction successful', title: 'Payment received', link: '#ML-3467' },
    { time: '10:45 AM', color: 'danger', subtext: 'Transaction failed', title: 'Payment declined', link: '#ML-3468' },
    { time: '12:15 PM', color: 'info', subtext: 'Transaction pending', title: 'Payment pending', link: '#ML-3469' },
    { time: '2:00 PM', color: 'warning', subtext: 'Transaction delayed', title: 'Payment delayed', link: '#ML-3470' }
  ];

  // Top Projects
  dataSource = [
    { imagePath: 'path/to/image1.jpg', uname: 'John Doe', position: 'Project Manager', productName: 'Project 1', priority: 'low', budget: 50 },
    { imagePath: 'path/to/image2.jpg', uname: 'Alice Smith', position: 'Developer', productName: 'Project 2', priority: 'medium', budget: 75 },
    { imagePath: 'path/to/image3.jpg', uname: 'Bob Johnson', position: 'Designer', productName: 'Project 3', priority: 'high', budget: 100 },
    { imagePath: 'path/to/image4.jpg', uname: 'Eva Brown', position: 'Tester', productName: 'Project 4', priority: 'critical', budget: 120 },
    { imagePath: 'path/to/image5.jpg', uname: 'Chris Wilson', position: 'Analyst', productName: 'Project 5', priority: 'moderate', budget: 90 }
  ];

  // Product Cards
  productcards = [
    { imgSrc: 'path/to/product1.jpg', title: 'Product 1', price: 20, rprice: 25 },
    { imgSrc: 'path/to/product2.jpg', title: 'Product 2', price: 30, rprice: 35 },
    { imgSrc: 'path/to/product3.jpg', title: 'Product 3', price: 25, rprice: 28 },
    { imgSrc: 'path/to/product4.jpg', title: 'Product 4', price: 18, rprice: 22 },
    { imgSrc: 'path/to/product5.jpg', title: 'Product 5', price: 40, rprice: 45 }
  ];

  // Add any other variables or methods you need here

}
