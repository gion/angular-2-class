import { Component, Input } from '@angular/core';

@Component ({
    selector: 'product-list',
    templateUrl: 'app/ProductList.html'
})

export class ProductList {
    @Input() listOfProducts: Array<any>;
}
