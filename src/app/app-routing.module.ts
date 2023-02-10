import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { TestAPIComponent } from './test-api/test-api.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'women',
    component: WomenComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'test',
    component: TestAPIComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
