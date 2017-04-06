import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { productFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './star/star.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    // Import the pipe so as to make it available to all components within this module.
    productFilterPipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
