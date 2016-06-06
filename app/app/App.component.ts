import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { Routes, Router } from '@angular/router';
import { ProductList } from './ProductList.component';
import { staticProductList } from './fixtures';
import { ProductPage } from './ProductPage.component';

@Routes([
    {
        path: '/',
        component: ProductList
    },
    {
        path: 'products/:id',
        component: ProductPage
    }
])

@Component ({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, ProductList],
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/App.html'
})

class App {
    productList: any;
    private message:String;

    constructor(router: Router) {
        this.message = 'Superhero shopz';
        this.productList = staticProductList;
    }

    // addProduct(name: string): void {
        // this.products.push(name);
    // }
}

export { App };
