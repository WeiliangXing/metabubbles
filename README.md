This is an experimental app in ng-2 with Javascript for metabubbles effect presentation.

## Steps:
1. in the new empty directory, npm init -y to create package.json
2. npm install webpack webpack-dev-server --save-dev
(webpack: a module bundler)
3. create and fill webpack.config.js
(tell webpack entry point is app/main.js, output is bundle.js)
4. create app/main.js, modify pacakge.json, then npm run build
5. in package.json , add start for server, then npm run start
6. modify index.html
7. npm install babel-core babel-loader babel-preset-es2015 --save-dev
(bable help webpack builds bundle while transpiles code on the fly)
7.5. npm install babel-core babel-loader babel-preset-es2015 --save-dev
8. modify webpack.config.js
9. npm install babel-plugin-transform-decorators-legacy --save-dev
npm install babel-preset-stage-0 --save-dev
10. install ng-2
  npm install es6-promise@3.1.2 es6-shim@0.33.13 --save
  npm install reflect-metadata@0.1.2 rxjs@5.0.0-beta.2 zone.js@0.5.15 --save
  npm install angular2 --save
11. modify js/polyfills.js
12.create js/canvas.component.js
13. modify app/main.js
14. add svg to CanvasComponent
15. create circle.component.js
16. install css loader npm install css-loader --save-dev
17.  touch canvas.component.css, circle.component.css
18. touch circle.service.js, inject into canvas.component.js
19. introduce random into circles.service
20. eliminate dup of width/height into main.js
21. add update() to service
22. make collision meta.
23. add color
24. to improve performance, we could do onPush Detection;
25. to improve performance, we could also do in product mode:
in app/prod.js
```javascript
import {enableProdMode} from 'angular2/core';
enableProdMode();
```
In webpack.prod.config.js
```javascript
module.exports = {
  entry: ['./app/polyfills.js', './app/prod.js', './app/main.js'],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy']
      }
    }]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
```
In package.json
```javascript
"scripts": {
  "build": "webpack --config webpack.prod.config.js",
  "start": "webpack-dev-server --inline"
},
```

## Reference:
http://teropa.info/blog/2016/02/28/metabubbles-generative-art-with-angular-2.html#table-of-contents
