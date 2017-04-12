import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { productFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './star/star.component'
import { ProductService } from "app/product.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    productFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
