
import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
  selector: 'mb-canvas',
  template: `
    <svg [attr.viewBox]="getViewBox()"
         preserveAspectRatio="xMidYMid meet">
      <svg:g mb-circle
             *ngFor="#circle of circles"
             [circle]="circle" />
    </svg>
  `,
  styles: [require('css!./canvas.component.css').toString()],
  directives: [CircleComponent],
  providers: [Circles]
})
export class CanvasComponent {

  static parameters = [Circles, 'canvasWidth', 'canvasHeight'];
  constructor(circles, canvasWidth, canvasHeight) {
    this.circles = circles.circles;
    this.width = canvasWidth;
    this.height = canvasHeight;
  }

  getViewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

}
