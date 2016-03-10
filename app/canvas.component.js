
import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
  selector: 'mb-canvas',
  template: `
    <svg [attr.viewBox]="getViewBox()"
         preserveAspectRatio="xMidYMid meet"
         (click)="toggleRunning()">
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
    this.circlesService = circles;
    this.circles = circles.circles;
    this.width = canvasWidth;
    this.height = canvasHeight;
  }

  ngOnInit() {
    this.running = true;
    this.animationFrame();
  }

  ngOnDestroy() {
    this.running = false;
  }

  animationFrame() {
    this.circlesService.update();
    if (this.running) {
      requestAnimationFrame(() => this.animationFrame());
    }
  }

  toggleRunning() {
    this.running = !this.running;
    if (this.running) {
      this.animationFrame();
    }
  }

  getViewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

}
