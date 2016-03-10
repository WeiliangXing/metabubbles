import {Component, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: '[mb-circle]',
  inputs: ['x', 'y', 'radius', 'visible', 'color'],
  template: `
    <svg:circle [attr.cx]="x"
                [attr.cy]="y"
                [attr.r]="radius"
                [attr.fill]="color"
                [style]="getStyle()" />
  `,
  styles: [require('css!./circle.component.css').toString()],
  // change detect only object's attribute changes, not object or frame change
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {

  getStyle() {
    return this.visible ?
      '' :
      'display: none';
  }
}
