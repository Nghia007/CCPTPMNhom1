import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent {
  orders: any
  status: any
  constructor(private orderservice: OrderService, private router: Router) {
    this.orderservice.getorderadmin().subscribe((data) => {
      console.log(data);
      this.orders = data
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSelected(value: any) {
    console.log(value);
    this.status = value
  }
  updateStatus(id: any) {
    this.orderservice.updateOrder({id: id, data: {status: this.status}}).subscribe(() => {
      window.location.reload()
    })
  }
}
