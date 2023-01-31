import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
  ) { }
  userInfo: any;
  ngOnInit() {
    this.userInfo = {
      realName: "testOne"
    };
  }
  logout() {
    // 退出登录清除以下缓存

    // 跳到登录页
  }
}
