import { Component, OnInit } from '@angular/core';
// this Component For Testing Data UI From API
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
})
export class TestAPIComponent {
  products: any[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  // [
  //   "smartphones",
  //   "laptops",
  //   "fragrances",
  //   "skincare",
  //   "groceries",
  //   "home-decoration",
  //   "furniture",
  //   "tops",
  //   "womens-dresses",
  //   "womens-shoes",
  //   "mens-shirts",
  //   "mens-shoes",
  //   "mens-watches",
  //   "womens-watches",
  //   "womens-bags",
  //   "womens-jewellery",
  //   "sunglasses",
  //   "automotive",
  //   "motorcycle",
  //   "lighting"
  // ]

  async getAllProducts() {
    const res = await fetch(
      'https://dummyjson.com/products/category/smartphones'
    );
    const data = await res.json();
    console.log(data);
    this.products = data.products;
  }
  async get2AllProducts() {
    const res = await fetch('https://api.storerestapi.com/products');
    const data = await res.json();
    console.log(data);
    // this.products = data.products;
  }
}
