import { Injectable } from '@angular/core';
import { PeriodicElement } from '../routes/workingRange/store-home/store-home.component';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: PeriodicElement[] = [];
    /* . . . */

    addToCart(product: PeriodicElement) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    /* . . . */
}