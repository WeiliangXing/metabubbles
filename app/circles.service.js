import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {

  static parameters = ['canvasWidth', 'canvasHeight'];
  constructor(canvasWidth, canvasHeight) {
    this.circles = [];
    for (let i=0 ; i<100 ; i++) {
      this.circles.push({
        x: this.randInt(canvasWidth),
        y: this.randInt(canvasHeight),
        radius: this.randInt(100) + 10
      });
    }
  }

  randInt(max) {
    return Math.floor(Math.random() * max);
  }
}
