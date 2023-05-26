import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-order-user',
  templateUrl: './list-order-user.component.html',
  styleUrls: ['./list-order-user.component.css']
})
export class ListOrderUserComponent {
  @Input()
  order!:any;
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.order);
 }
}
