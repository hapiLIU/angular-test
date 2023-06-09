import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './workingRange/store-home/dialog/dialog.component';

const COMPONENTS: never[] = [];
const COMPONENTS_NOROUNT = [
  LoginComponent,
];

@NgModule({
  imports: [RouteRoutingModule, SharedModule],
  exports: [...COMPONENTS_NOROUNT],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, DialogComponent],
  entryComponents: COMPONENTS_NOROUNT,
  providers: [],
})
export class RoutesModule { }
