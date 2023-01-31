import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
export interface PeriodicElement {
  id: string;
  chinese_name: string;
  english_name: string;
  japanese_name: string;
  ability: string[];
  type: string[];
  height: string;
  weight: string;
  attributePhase: object
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
  ) {
    this.http.get('assets/json/pokemons.json').subscribe((res) => {
      this.pokemons = Object.values(res);
      // console.log(res);
      // console.log(Object.keys(res));
      // console.log(Object.values(res));
      console.log(this.pokemons);
    })
  }
  // displayedColumns: string[] = [
  //   "id",
  //   "chinese_name",
  //   "english_name",
  //   "apanese_name",
  //   "ability",
  //   "type",
  //   "height",
  //   "weight",
  //   "attributePhase",
  //   "evolution",
  //   "evolutionaryHierarchy",
  //   "hideProperties"
  // ];
  displayedColumns: any[] = [
    { attribute: "id", name: "编号" },
    { attribute: "chinese_name", name: "名字" },
    { attribute: "ability", name: "特性" },
    { attribute: "type", name: "属性" },
    { attribute: "height", name: "身高" },
    { attribute: "weight", name: "体重" },
    { attribute: "evolution", name: "进化" },
    { attribute: "evolutionaryHierarchy", name: "进化等级" },
    { attribute: "hideProperties", name: "隐藏特性" },
    // { attribute: "attributePhase", name: "属性相性" },
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
    "attributePhase",
  ];

  viewAttr(element: any) {
    console.log(element)
  }
}
