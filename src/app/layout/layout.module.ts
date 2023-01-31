import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderMenuComponent } from './header/component/header-menu/header-menu.component';

const COMPONENTS = [LayoutDefaultComponent];
const HEADER_COMPONENTS = [HeaderComponent];
@NgModule({
  imports: [SharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, ...HEADER_COMPONENTS, LayoutDefaultComponent, HeaderMenuComponent],
  entryComponents: [],
})
export class LayoutModule { }
