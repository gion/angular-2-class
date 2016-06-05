import { Input, Component } from "@angular/core";
import { checkoutItems } from "./types";
import { Cart, checkoutState } from "./Cart";
import { ProductStore } from "./ProductStore";

@Component({
  selector: "checkout",
  directives: [],
  styles: [`
    small.error {
      display: none;
    }
    .error small.error {
      display: block;
    }
  `],
  templateUrl: "app/Checkout.component.html",
})
export class Checkout {

  checkout: checkoutState;
  order: string;

  constructor(public cart: Cart) {
    this.cart.checkoutState()
      .then(state => this.checkout = state)
  }

  submitted(form) {
    const prepared = Object.assign({}, form.value, {
      cardNumber: prepareCardNumber(form.value.cardNumber),
    });

    this.order = JSON.stringify(prepared, null, 4);
  }

}

function prepareCardNumber(cardNumber: string): number {
  return cardNumber.replace(/\D/g,"");
}




