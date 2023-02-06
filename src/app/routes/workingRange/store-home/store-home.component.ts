import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CartService } from 'src/app/services/cart.service';
export interface PeriodicElement {
  id: string;
  chinese_name: string;
  english_name: string;
  japanese_name: string;
  ability: string[];
  type: string[];
  height: string;
  weight: string;
  attributeDetails: object
  evolution: string;
  evolutionaryHierarchy: string;
  hideProperties: string[]
}
@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent {
  pokemons!: PeriodicElement[]
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public cartService: CartService
  ) {
    this.http.get('assets/json/pokemons.json').subscribe((res) => {
      this.pokemons = Object.values(res);
      // console.log(this.pokemons);
    })
  }
  displayedColumns: any[] = [
    { attribute: "id", name: "编号" },
    { attribute: "chinese_name", name: "名字" },
    { attribute: "ability", name: "特性" },
    { attribute: "type", name: "属性" },
    { attribute: "height", name: "身高（m）" },
    { attribute: "weight", name: "体重（kg）" },
    { attribute: "evolution", name: "进化" },
    { attribute: "evolutionaryHierarchy", name: "进化等级" },
    { attribute: "hideProperties", name: "隐藏特性" },
    // { attribute: "attributeDetails", name: "属性详情" },
  ];
  displayedColumnsAttr: string[] = [
    "id",
    "chinese_name",
    "ability",
    "type",
    "height",
    "weight",
    "evolution",
    "evolutionaryHierarchy",
    "hideProperties",
    "attributeDetails",
    "operation"
  ];

  // 查看属性详情
  viewAttr(element: any) {
    // console.log(element)
    this.dialog.open(DialogComponent, { data: element })

    // const dialogRef = this.dialog.open(DialogComponent, { data: element });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('属性详情关闭');
    // });
  }

  // +1  
  addPets(element: PeriodicElement) {
    console.log(element)
    this.cartService.addToCart(element)
  }
}
