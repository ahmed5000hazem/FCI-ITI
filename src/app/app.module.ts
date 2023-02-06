import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { TestAPIComponent } from './test-api/test-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenComponent,
    WomenComponent,
    ElectronicsComponent,
    HomeComponent,
    DetailsComponent,
    FormComponent,
    TestAPIComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// mongodb+srv://mohamed991:e4NDaKPX9hIDT6t7@cluster-online-shopping.smygccd.mongodb.net/?retryWrites=true&w=majority
