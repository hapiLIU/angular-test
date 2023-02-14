import { Component } from '@angular/core';
declare let BMapGL: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor() { }
  ngOnInit() {
    const map = new BMapGL.Map('map');//创建地图实例
    const point = new BMapGL.Point(116.404, 39.915);//创建点坐标
    map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放

    let scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    let zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    map.addControl(zoomCtrl);
    let cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
    map.addControl(cityCtrl);

    // let myGeo = new BMapGL.Geocoder();
    // // 将地址解析结果显示在地图上，并调整地图视野
    // myGeo.getPoint('河南省郑州市郑东新区华能河南大厦', function (point: any) {
    //   if (point) {
    //     map.centerAndZoom(point, 16);
    //     map.addOverlay(new BMapGL.Marker(point, { title: '河南省郑州市郑东新区华能河南大厦' }))
    //   } else {
    //     alert('您选择的地址没有解析到结果！');
    //   }
    // }, '河南省')

    // map.setMapType('B_NORMAL_MAP');      // 设置地图类型为普通模式
    // map.setMapType('B_EARTH_MAP');      // 设置地图类型为地球模式

    // 定位SDK辅助定位
    // let geolocation = new BMapGL.Geolocation();
    // // 开启SDK辅助定位
    // geolocation.enableSDKLocation();
    // geolocation.getCurrentPosition(function (r: { point: { lng: string; lat: string; }; }) {
    //   let mk = new BMapGL.Marker(r.point);
    //   map.addOverlay(mk);
    //   map.panTo(r.point);
    //   alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    // });

    // IP定位，以所在城市中心为中心
    // function myFun(result: { name: any; }) {
    //   var cityName = result.name;
    //   map.setCenter(cityName);
    //   alert("当前定位城市:" + cityName);
    // }
    // var myCity = new BMapGL.LocalCity();
    // myCity.get(myFun);

    // 浏览器定位
    // let geolocation = new BMapGL.Geolocation();
    // geolocation.getCurrentPosition(function (r: { point: { lng: string; lat: string; }; }) {
    //   var mk = new BMapGL.Marker(r.point);
    //   map.addOverlay(mk);
    //   map.panTo(r.point);
    //   alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    // });


  }


}
