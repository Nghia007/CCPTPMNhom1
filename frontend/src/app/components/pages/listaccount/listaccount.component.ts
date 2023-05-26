import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.css'],
})
export class ListaccountComponent {
  accounts: any;
  @ViewChild('emailuser') email!: ElementRef;
  @ViewChild('addressuser') address!: ElementRef;
  @ViewChild('nameuser') name!: ElementRef;
  constructor(
    foodService: FoodService,
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    foodService.getAllUser().subscribe((data) => {
      console.log(data);
      this.accounts = data;
    });
  }

  deleteUser(id: any) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(() => {
      this.toastrService.success('Xóa thành công');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }

  editUserHd(id: any) {
    this.userService
      .editUser({
        id: id,
        data: {
          email: this.email.nativeElement.value,
          address: this.address.nativeElement.value,
          name: this.name.nativeElement.value,
        },
      })
      .subscribe((data) => {
        window.location.reload()
      });
  }
}
