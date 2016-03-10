
import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';

@Component({
  selector: 'mb-canvas',
  template: `
    <svg viewBox="0 0 900 500"
         preserveAspectRatio="xMidYMid meet">
    <svg:g mb-circle
        *ngFor="#circle of circles"
        [circle]="circle" />
    </svg>
  `,
  styles: [require('css!./canvas.component.css').toString()],
  directives: [CircleComponent]
})
export class CanvasComponent {
  circles = [
    {x: 50, y: 50, radius: 10},
    {x: 75, y: 75, radius: 20},
    {x: 115, y: 115, radius: 30}
  ];
}
