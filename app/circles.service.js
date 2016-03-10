import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {

  static parameters = ['canvasWidth', 'canvasHeight'];
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.circleMap = new Map();
    this.sourceCircles = [];
    this.circles = [];
    for (let i=0 ; i<5 ; i++) {
      this.sourceCircles.push({
        x: this.randInt(canvasWidth),
        y: this.randInt(canvasHeight),
        radius: this.randInt(100) + 10,
        xMove: this.randInt(5) - 2,
        yMove: this.randInt(5) - 2
      });
    }
    this.pairs = [];
    for (let i = 0 ; i < this.sourceCircles.length ; i++) {
      for (let j = i + 1 ; j < this.sourceCircles.length ; j++) {
        this.pairs.push([this.sourceCircles[i], this.sourceCircles[j]]);
      }
    }
  }

  update() {
    for (const sourceCircle of this.sourceCircles) {
      this.moveCircle(sourceCircle); // move sources circles, not shown yet
    }
    //logic:
    // for two unshown source circles, if they move towards, their mid shown circle enlarge;
    //else if they move backwards, overlap radius reduce, mid shown circle shrink.
    for (const pair of this.pairs) {
      const [left, right] = pair;
      const dist = this.distance(left, right);
      const overlap = dist - left.radius - right.radius;
      if (overlap < 0) {
        const midX = (left.x + right.x) / 2;
        const midY = (left.y + right.y) / 2;
        const radius = -overlap / 2;
        let collisionCircle = this.circleMap.get(pair);
        if (collisionCircle) {
          collisionCircle.x = midX;
          collisionCircle.y = midY;
          collisionCircle.radius = radius;
        } else {
          collisionCircle = {x: midX, y: midY, radius};
          this.circles.push(collisionCircle);
          this.circleMap.set(pair, collisionCircle);
        }
        // when collision occur, visible
        collisionCircle.visible = true;
      }
      // when collision finished, invisible
      else if (this.circleMap.has(pair)) {
        this.circleMap.get(pair).visible = false;
      }
    }
  }

  distance(circle1, circle2) {
    return Math.sqrt(
      (circle2.x - circle1.x) ** 2 +
      (circle2.y - circle1.y) ** 2
    );
  }

  randInt(max) {
    return Math.floor(Math.random() * max);
  }



  moveCircle(circle) {
    circle.x += circle.xMove;
    circle.y += circle.yMove;
    if (circle.x > (this.canvasWidth + circle.radius)) {
      circle.x = 0 - circle.radius;
    }
    if (circle.x < (0 - circle.radius)) {
      circle.x = this.canvasWidth + circle.radius;
    }
    if (circle.y > (this.canvasHeight + circle.radius)) {
      circle.y = 0 - circle.radius;
    }
    if (circle.y < (0 - circle.radius)) {
      circle.y = this.canvasHeight + circle.radius;
    }
  }


}
