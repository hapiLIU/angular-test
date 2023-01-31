import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreHomeComponent } from './store-home/store-home.component';

const COMPONENTS: never[] = [];
const HEADER_COMPONENTS = [StoreHomeComponent];
@NgModule({
    imports: [SharedModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS, ...HEADER_COMPONENTS],
    entryComponents: [],
})
export class workingRangeModule { }
