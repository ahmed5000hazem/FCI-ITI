import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cartProducts' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    }
    console.log(this.cartProducts);
    this.getCartTotal();
  }

  update() {
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  addAmount(index: number) {
    this.cartProducts[index].Quantity++;
    this.update();
  }

  minsAmount(index: number) {
    if (this.cartProducts[index].Quantity > 1) {
      this.cartProducts[index].Quantity--;
      this.update();
    }
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].price * this.cartProducts[x].Quantity;
    }
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.update();
  }

  ClearCart() {
    this.cartProducts = [];
    this.update();
  }
}
