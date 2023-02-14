import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './passport/login/login.component';
import { StoreHomeComponent } from './workingRange/store-home/store-home.component';
import { ShoppingCartComponent } from './workingRange/shopping-cart/shopping-cart.component';
import { LayoutDefaultComponent } from '../layout/layout-default/layout-default.component';
import { JsonEditorComponent } from './code/json-editor/json-editor.component';
import { CountDownComponent } from './code/count-down/count-down.component';
import { DrawingComponent } from './code/drawing/drawing.component';
import { MapComponent } from './code/map/map.component';
import { LuckDrawComponent } from './code/luck-draw/luck-draw.component';

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
  {
    path: "code",
    component: LayoutDefaultComponent,
    data: { animation: 'code' },
    children: [
      {
        path: 'jsonEditor',
        component: JsonEditorComponent,
        data: { title: 'JSON编辑器' },
      },
      {
        path: 'drawing',
        component: DrawingComponent,
        data: { title: '画板' },
      },
      {
        path: 'map',
        component: MapComponent,
        data: { title: '地图' },
      },
      {
        path: 'luckDraw',
        component: LuckDrawComponent,
        data: { title: '抽奖' },
      }
    ],
  },
  {
    path: "code",
    data: { animation: 'code' },
    children: [
      {
        path: 'countDown',
        component: CountDownComponent,
        data: { title: '倒计时' },
      }
    ],
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
