import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss'],
})
export class WomenComponent implements OnInit {
  products: any[] = [];
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getWomen().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
    });
  }
}
