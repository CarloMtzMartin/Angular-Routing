import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { IProduct, ProductResolved } from './product';
=======
import { Product } from './product';
>>>>>>> 7df32edb50efc7045f13b9455a0099de0ade67c1
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
<<<<<<< HEAD
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
    }
    onProductRetrieved(product: IProduct): void {
        this.product = product;

        if (this.product) {
            this.pageTitle = `Product Detail: ${this.product.productName}`;
        }
    }

    

    // getProduct(id: number) {
    //     this.productService.getProduct(id).subscribe(
    //         product => this.product = product,
    //         error => this.errorMessage = <any>error);
    // }
=======
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService) { }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.onProductRetrieved(product),
      error => this.errorMessage = <any>error);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
>>>>>>> 7df32edb50efc7045f13b9455a0099de0ade67c1
}
