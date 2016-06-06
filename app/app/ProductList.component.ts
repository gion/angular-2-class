import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductStore } from './ProductStore';
import { Product } from './Product.component';
import { product } from './types';

@Component ({
    selector: 'product-list',
    templateUrl: 'app/ProductList.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        {
            // aka interface
            provide: ProductStore,

            // value, ref, def
            // can be deferred to runtime
            useClass: ProductStore
        }
    ]
})

class ProductList {
    // @Input() listOfProducts: Array<any>;

    listOfProducts: Array<product>;
    store: ProductStore;

    constructor(store: ProductStore) {
        store.all()
            .then(products => this.listOfProducts = products);
    }
}

export { ProductList };
