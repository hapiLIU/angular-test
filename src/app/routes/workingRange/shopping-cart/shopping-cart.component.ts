import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  testData: any
  testDatas: any
  constructor(
    public cartService: CartService
  ) {
    this.testDatas = this.cartService.getItems()
    console.log(this.testDatas)
    this.testData = {
      "chinese_name": "妙蛙种子",
      "id": 1,
      "japanese_name": "フシギダネ",
      "english_name": "Bulbasaur",
      "height": "0.7",
      "weight": "6.9",
      "type": ["草", "毒"],
      "ability": ["茂盛"],
      "hideProperties": ["叶绿素"],
      "evolution": "妙蛙草",
      "evolutionaryHierarchy": 16,
      "attributeDetails": {
        "一般": 1.0,
        "格斗": 0.5,
        "飞行": 2.0,
        "毒": 1.0,
        "地面": 1.0,
        "岩石": 1.0,
        "虫": 1.0,
        "幽灵": 1.0,
        "钢": 1.0,
        "火": 2.0,
        "水": 0.5,
        "草": 0.25,
        "电": 0.5,
        "超能力": 2.0,
        "冰": 2.0,
        "龙": 1.0,
        "恶": 1.0,
        "妖精": 0.5
      }
    }
  }
}
