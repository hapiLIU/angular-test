import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreHomeComponent } from './store-home/store-home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const COMPONENTS: never[] = [];
const HEADER_COMPONENTS = [StoreHomeComponent, ShoppingCartComponent];
@NgModule({
    imports: [SharedModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS, ...HEADER_COMPONENTS],
    entryComponents: [],
})
export class workingRangeModule { }
