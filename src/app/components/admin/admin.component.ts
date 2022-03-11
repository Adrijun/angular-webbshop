import { Component, OnInit } from '@angular/core';
import { sendOrder } from 'src/app/models/sendOrder';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private orderService: OrdersService) { }
  orderToApis: sendOrder[] = []
  ngOnInit(): void {
    this.getOrderApi()
  }

  getOrderApi() {
    this.orderService.getOrderApi().subscribe((data: sendOrder[]) => {
      this.orderToApis = data
    })
  }

}
