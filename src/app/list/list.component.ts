import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    console.log('welcome first ');

    // this.products = this.mainService.allProducts;
  }

  addToCart(product: any) {
    this.mainService.addToCart(product);
  }
}
