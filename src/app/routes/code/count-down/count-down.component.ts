import { Component } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent {
  date: Date = new Date();
  hourOne!: number
  hourTwo!: number
  minutesOne!: number
  minutesTwo!: number
  secondsOne!: number
  secondsTwo!: number
  constructor() { }
  ngOnInit() {
    this.date = new Date()
    if (this.date.getHours() < 10) {
      this.hourOne = 0
      this.hourTwo = Number(this.date.getHours().toString()[0])
    } else {
      this.hourOne = Number(this.date.getHours().toString()[0])
      this.hourTwo = Number(this.date.getHours().toString()[1])
    }
    if (this.date.getMinutes() < 10) {
      this.minutesOne = 0
      this.minutesTwo = Number(this.date.getMinutes().toString()[0])
    } else {
      this.minutesOne = Number(this.date.getMinutes().toString()[0])
      this.minutesTwo = Number(this.date.getMinutes().toString()[1])
    }
    if (this.date.getSeconds() < 10) {
      this.secondsOne = 0
      this.secondsTwo = Number(this.date.getSeconds().toString()[0])
    } else {
      this.secondsOne = Number(this.date.getSeconds().toString()[0])
      this.secondsTwo = Number(this.date.getSeconds().toString()[1])
    }
  }

  timer = setInterval(() => {
    this.date = new Date()
    if (this.date.getHours() < 10) {
      this.hourOne = 0
      this.hourTwo = Number(this.date.getHours().toString()[0])
    } else {
      this.hourOne = Number(this.date.getHours().toString()[0])
      this.hourTwo = Number(this.date.getHours().toString()[1])
    }
    if (this.date.getMinutes() < 10) {
      this.minutesOne = 0
      this.minutesTwo = Number(this.date.getMinutes().toString()[0])
    } else {
      this.minutesOne = Number(this.date.getMinutes().toString()[0])
      this.minutesTwo = Number(this.date.getMinutes().toString()[1])
    }
    if (this.date.getSeconds() < 10) {
      this.secondsOne = 0
      this.secondsTwo = Number(this.date.getSeconds().toString()[0])
    } else {
      this.secondsOne = Number(this.date.getSeconds().toString()[0])
      this.secondsTwo = Number(this.date.getSeconds().toString()[1])
    }
    // console.log(this.secondsOne, this.secondsTwo)
  }, 1000);

}
