import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  singleProduct: any;
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.mainService.getSingleProduct(id).subscribe({
      next: (data) => {
        this.singleProduct = data;
        console.log(data);
      },
    });
  }
}
