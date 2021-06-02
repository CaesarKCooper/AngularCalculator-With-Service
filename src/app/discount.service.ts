import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  

discountPrice(): void {
  var ProductPrice = Number((<HTMLInputElement>document.getElementById("PriceInput")).value);
  var DiscountAmount = Number((<HTMLInputElement>document.getElementById("DiscountAmountInput")).value) /100;
  var ProductPriceAfterDiscount = ProductPrice * DiscountAmount;
  var Answer = ProductPrice - ProductPriceAfterDiscount;
  
  document.getElementById("Answer")!.innerHTML = "$" + Answer;
}


}
