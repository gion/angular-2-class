import { Component } from '@angular/core';
import { ProductList } from './ProductList.component';
import { Product } from './Product.component';
import { staticProductList } from './fixtures';

@Component ({
    selector: 'app',
    directives: [Product],
    templateUrl: 'app/App.html'
})

class App {
    products:any;
    private message:String;
    constructor() {
        this.message = 'Superhero shopz';
        this.products = staticProductList;
    }

    // addProduct(name: string): void {
        // this.products.push(name);
    // }
}

export { App };
