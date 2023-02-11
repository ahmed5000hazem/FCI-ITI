import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // first_name = <HTMLInputElement>document.getElementById('add-product-name');
  productName: string = '';
  productPrice: string = '';
  productCategory: string = '';
  productImage: string = '';
  productDescription: string = '';
  constructor() {}

  insertProduct() {
    console.log('here');
    console.log(this.productName, this.productPrice, this.productImage);
  }

  getName(val: string) {
    this.productName = val;
  }

  getPrice(val: string) {
    this.productPrice = val;
  }
  getImage(val: string) {
    console.log(val);
    this.productImage = val;
  }
}
