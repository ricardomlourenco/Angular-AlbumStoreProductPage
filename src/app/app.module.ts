import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';

import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http';
import { ProductDescriptionComponent } from './product-description/product-description.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
