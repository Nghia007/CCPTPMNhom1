import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css'],
})
export class ListbooksComponent {
  @ViewChild('namebook') name!: ElementRef;
  @ViewChild('pricebook') price!: ElementRef;
  @ViewChild('starsbook') stars!: ElementRef;
  @ViewChild('urlbook') url!: ElementRef;
  @ViewChild('isCheck1') check1!: ElementRef;
  @ViewChild('isCheck2') check2!: ElementRef;
  @ViewChild('isCheck3') check3!: ElementRef;
  @ViewChild('isCheck4') check4!: ElementRef;
  @ViewChild('namebookadd') namebook!: ElementRef;
  @ViewChild('pricebookadd') pricebook!: ElementRef;
  @ViewChild('starbookadd') starbook!: ElementRef;
  @ViewChild('linkbookadd') linkbook!: ElementRef;


  openForm: boolean = false;
  books: any[] = [];
  constructor(
    private foodService: FoodService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    foodService.getAll().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }

  openFormAdd() {
    this.openForm = !this.openForm;
  }

  handleDeleteBook(id: any) {
    this.foodService.deleteBook(id).subscribe(() => {
      this.toastrService.success('Xóa thành công');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }

  handleEditBook({id, image}: any) {
    this.foodService
      .editBooks({
        id: id,
        data: {
          name: this.name.nativeElement.value,
          price: this.price.nativeElement.value,
          stars: this.stars.nativeElement.value,
          imageUrl: !this.url.nativeElement.value ? image : this.url.nativeElement.value,
        },
      })
      .subscribe((data) => {
        window.location.reload()
      });
  }
  // name, price, stars, imageUrl, tags
  addBook() {
    this.foodService.postBook({
      name: this.namebook.nativeElement.value,
      price: this.pricebook.nativeElement.value,
      stars: this.starbook.nativeElement.value,
      imageUrl: this.linkbook.nativeElement.value,
      tags: [
        this.check1.nativeElement.checked && this.check1.nativeElement.value,
        this.check2.nativeElement.checked && this.check2.nativeElement.value,
        this.check3.nativeElement.checked && this.check3.nativeElement.value,
        this.check4.nativeElement.checked && this.check4.nativeElement.value,
      ]
    }).subscribe(() => {
     window.location.reload()
    })
  }
}
