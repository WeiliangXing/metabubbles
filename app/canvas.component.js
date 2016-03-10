
import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
  selector: 'mb-canvas',
  template: `
    <svg viewBox="0 0 900 500"
         preserveAspectRatio="xMidYMid meet">
    <svg:g mb-circle
        *ngFor="#circle of circles.circles"
        [circle]="circle" />
    </svg>
  `,
  styles: [require('css!./canvas.component.css').toString()],
  directives: [CircleComponent],
  providers: [Circles]
})
export class CanvasComponent {
  static parameters = [Circles];
  constructor(circles) {
    this.circles = circles;
  }
}
