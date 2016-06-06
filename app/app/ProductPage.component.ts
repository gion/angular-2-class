import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { ProductStore } from './ProductStore';
import { Product } from './Product.component';
import { product } from './types';

@Component({
    selector: 'product-page',
    directives: [Product],
    template: '<product [product]="product"></product>',
})

class ProductPage {
    product: product;

    constructor(private segment: RouteSegment,private store: ProductStore) {
        console.log(segment.parameters);
        store.get(Number(segment.parameters.id))
            .then(product => this.product = product);
    }
}

export { ProductPage }
