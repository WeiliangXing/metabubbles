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


## Reference:
http://teropa.info/blog/2016/02/28/metabubbles-generative-art-with-angular-2.html#table-of-contents
