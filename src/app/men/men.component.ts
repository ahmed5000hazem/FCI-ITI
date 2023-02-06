import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
})
export class MenComponent implements OnInit {
  products: any[] = [];
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getMen().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
    });
  }
}
