import { Component, OnInit } from '@angular/core';

import { IProduct, ProductResolved } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
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
}
