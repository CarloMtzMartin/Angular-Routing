import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { ProductResolved } from './product';
import { ProductService } from "./product.service";
import { of } from "rxjs/observable/of";

@Injectable()
export class ProductResolver implements Resolve<ProductResolved> {
    constructor(private productService: ProductService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
        const id = route.paramMap.get('id');

        if(isNaN(+id)) {
            const message = `Product id was not a number: ${id}`;
            console.error(message);
            return of({ product: null, error: message })
        }

        return this.productService.getProduct(+id)
        .map(product => ({ product: product }))
        .catch(error => {
            const message = `Retrieval error: ${error}`;
            console.error(message);
            return of({ product: null, error: message });        
        });
    }
}