# babel-loader-bug

This repository shows bug probably related with [babel-plugin-transform-react-constant-elements](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements).

If you disable `transform-react-constant-elements` in `.babelrc`, project is built properly.

## Run

```bash
npm install && npm run build && npm run serve
```

```bash
yarn && yarn run build && yarn run serve
```

## Error

```javascript
ERROR in ./src/index.js
Module parse failed: /Users/dk/Desktop/Dev/babel-loader-bug/node_modules/babel-loader/lib/index.js!/Users/dk/Desktop/Dev/babel-loader-bug/src/index.js Unexpected token (23:37)
You may need an appropriate loader to handle this file type.
| };
|
| var bazFactory = function bazFactory((_temp = _ref3, _ref4 = <Bar icon={icon}>
|       {text}
|     </Bar>, _temp)) {
```

### Full output

```javascript
Hash: 05600731ec4f9de4d08a
Version: webpack 2.2.1
Time: 956ms
     Asset       Size  Chunks             Chunk Names
   main.js  901 bytes       0  [emitted]  main
index.html  260 bytes          [emitted]
   [0] ./src/index.js 390 bytes {0} [built] [failed] [1 error]

ERROR in ./src/index.js
Module parse failed: /Users/dk/Desktop/Dev/babel-loader-bug/node_modules/babel-loader/lib/index.js!/Users/dk/Desktop/Dev/babel-loader-bug/src/index.js Unexpected token (23:37)
You may need an appropriate loader to handle this file type.
| };
|
| var bazFactory = function bazFactory((_temp = _ref3, _ref4 = <Bar icon={icon}>
|       {text}
|     </Bar>, _temp)) {
Child html-webpack-plugin for "index.html":
       [0] ./~/lodash/lodash.js 540 kB {0} [built]
       [1] (webpack)/buildin/global.js 509 bytes {0} [built]
       [2] (webpack)/buildin/module.js 517 bytes {0} [built]
       [3] ./~/html-webpack-plugin/lib/loader.js!./src/index.ejs 635 bytes {0} [built]
```
