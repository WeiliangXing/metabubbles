import {Component} from 'angular2/core';

@Component({
  selector: '[mb-circle]',
  inputs: ['circle'],
  template: `
    <svg:circle [attr.cx]="circle.x"
                [attr.cy]="circle.y"
                [attr.r]="circle.radius"
                [style]="getStyle()" />
  `,
  styles: [require('css!./circle.component.css').toString()]
})
export class CircleComponent {

  getStyle() {
    return this.circle.visible ?
      '' :
      'display: none';
  }
}
