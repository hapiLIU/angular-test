import { Component } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent {
  ngOnInit() {
    this.drawCanvas();
  }

  cwidth = 1200
  cheight = 600
  canvas: any;
  ctx: any;
  //按下标记
  onoff = false; //默认是未按下
  //设置颜色默认为白色
  linecolor = "black";
  //宽度默认为4
  linw = 4;
  src = ""
  lastLoc = { x: 0, y: 0 };//初始位置值
  toolStyle = 'paintBrush' //工具形状（画笔or橡皮）

  importImgURL = '../../../../assets/img/haha.jpeg'



  //生成图片
  change(): void {
    this.src = this.canvas.toDataURL("image/jpg");
    console.log("接受到的图片：" + this.src)
  }

  //绘制画板中内容
  drawCanvas() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext("2d");
    var imgUrl = document.getElementById("scream");

    //画一个黑色矩形
    // this.ctx.fillStyle = "#ffffff";
    // this.ctx.fillRect(0, 0, 600, 400);

    // 等待加载完成再绘制
    // setTimeout(() => {   //延时两秒执行读取方法
    //   this.ctx.drawImage(imgUrl, 0, 0, this.cwidth, this.cheight);
    // }, 500)


    this.canvas.onmousedown = (e: { pageX: any; pageY: any; clientX: number; clientY: number; }) => {
      this.onoff = true;
      this.lastLoc = this.windowCanvas(e.clientX, e.clientY);
    }


    //鼠标移动事件，事件绑定
    this.canvas.onmousemove = (e: any) => {
      if (this.onoff) {
        var curLoc = this.windowCanvas(e.clientX, e.clientY);
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastLoc.x, this.lastLoc.y);
        this.ctx.lineTo(curLoc.x, curLoc.y);
        this.ctx.strokeStyle = this.toolStyle == 'paintBrush' ? this.linecolor : '#eeeeee';
        this.ctx.lineWidth = this.linw;
        this.ctx.lineCap = "round";
        this.ctx.stroke();
        this.lastLoc = curLoc;
      }
      console.log("...移动onmousemove");
    }

    //鼠标按下，松开，移动，离开事件执行
    this.canvas.onmouseup = (e: { preventDefault: () => void; pageX: any; pageY: any; }) => {
      this.onoff = false;
    }
    this.canvas.onmouseout = (e: { preventDefault: () => void; }) => {
      this.onoff = false;
    }

  }


  /**
   * 获取canvas坐标
   */
  windowCanvas(x: number, y: number) {
    var ctxbox = this.canvas.getBoundingClientRect();
    console.log('canvas坐标', Math.round(x - ctxbox.left), Math.round(y - ctxbox.top));
    return { x: Math.round(x - ctxbox.left), y: Math.round(y - ctxbox.top) };
  }


  /**
   * 清空：canvas的高度及宽度重置
   */
  getEraser() {
    this.canvas.width = this.cwidth;
    this.canvas.height = this.cheight;
  }

  importsImg() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext("2d");
    var imgUrl = document.getElementById("scream");

    // 等待加载完成再绘制
    setTimeout(() => {   //延时两秒执行读取方法
      this.ctx.drawImage(imgUrl, 0, 0, this.cwidth, this.cheight);
    }, 500)
  }
}
