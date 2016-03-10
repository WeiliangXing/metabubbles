import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CanvasComponent} from './canvas.component';

bootstrap(CanvasComponent, [
  provide('canvasWidth', {useValue: 900}),
  provide('canvasHeight', {useValue: 500})
]);
