import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
  // circles = [
  //   {x: 50, y: 50, radius: 10},
  //   {x: 75, y: 75, radius: 20},
  //   {x: 115, y: 115, radius: 30}
  // ];
  constructor() {
    this.circles = [];
    for (let i=0 ; i<100 ; i++) {
      this.circles.push({
        x: this.randInt(900), // 0..900
        y: this.randInt(500), // 0..500
        radius: this.randInt(100) + 10 // 10..110
      });
    }
  }
  randInt(max) {
    return Math.floor(Math.random() * max);
  }
}
