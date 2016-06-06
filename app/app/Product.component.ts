import { Component, Input } from '@angular/core';

@Component ({
    selector: 'product',
    templateUrl: 'app/Product.html',
    styles: [`
        .product-title {
            color: #ff0000;
            font-size: 12px;
        }
    `]
})

class Product {
    @Input() product: Product;
    
    private quantity: number = 0;
    constructor() {

    }

    purchase() {
        this.quantity++;
    }
}

export { Product };
