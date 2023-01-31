import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './passport/login/login.component';
import { StoreHomeComponent } from './workingRange/store-home/store-home.component';
import { ShoppingCartComponent } from './workingRange/shopping-cart/shopping-cart.component';
import { LayoutDefaultComponent } from '../layout/layout-default/layout-default.component';

const routes: Routes = [
  { path: '', redirectTo: 'workingRange/storeHome', pathMatch: 'full' },
  // { path: '', redirectTo: 'test', pathMatch: 'full' },
  {
    path: 'passport',
    data: { animation: 'LoginPage' },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: '登录' },
      },
    ],
  },
  {
    path: "workingRange",
    component: LayoutDefaultComponent,
    data: { animation: 'workingRangePage' },
    children: [
      {
        path: 'storeHome',
        component: StoreHomeComponent,
        data: { title: '商品主页' },
      },
      {
        path: 'shoppingCart',
        component: ShoppingCartComponent,
        data: { title: '购物车' },
      },
    ],
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
