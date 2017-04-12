import { Component,  OnInit } from '@angular/core';
//import the IProduct interface to make the products strongly typed.
import { IProduct } from './product';
import { ProductService } from "app/product.service";

@Component({
  // make use of relative paths so as to eliminate absolute imports.
  moduleId: module.id,
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) { }

    toggleImage(): void {
      this.showImage = !this.showImage
    }

    ngOnInit(): void {
      this._productService.getProducts()
        .subscribe(products => this.products = products,
          error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

}
