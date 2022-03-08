import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) { }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.movie.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.movie.id, quantity);
    this.setCart();
  }


  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
