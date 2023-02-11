import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent {
  products: any[] = [];
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getElectronics().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
    });
  }
}
