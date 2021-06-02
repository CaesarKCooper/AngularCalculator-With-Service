import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component } from '@angular/core';
import { DiscountService } from './discount.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-discount-calculator';

  constructor(public discountService:DiscountService) { }



}







