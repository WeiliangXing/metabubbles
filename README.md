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


## Reference:
http://teropa.info/blog/2016/02/28/metabubbles-generative-art-with-angular-2.html#table-of-contents
