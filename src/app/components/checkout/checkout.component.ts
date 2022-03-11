import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import { sendOrder } from 'src/app/models/sendOrder';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService, private orderService: OrdersService) { }

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
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl,
    address: new FormControl(''),
    movieOrder: new FormControl(this.cartService)
  });

  handleSubmit() {
    var orderRows = this.cart.items.map((item) => {
      return { productId: item.movie.id, amount: item.quantity }
    });

    let formBody: sendOrder = {
      id: 0,
      companyId: 14,
      created: new Date(),
      createdBy: this.userForm.value.firstName + '' + this.userForm.value.email,
      paymenyMethod: 'cash',
      totalPrice: this.cart.totalPrice,
      status: 0,
      orderRow: orderRows
    }
    return this.orderService.postToApi(formBody)
  }
}
