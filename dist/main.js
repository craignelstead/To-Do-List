/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --charcoal: #2F4858;\n    --darkblue: #33658A;\n    --ashgray: #9DB5B2;\n    --raspberry: #D81E5B;\n    --orange: #F17300;\n    /* Color palette:\n        https://coolors.co/2f4858-33658a-9db5b2-d81e5b-f17300\n    */\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nli, ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\n#allContainer {\n    display: grid;\n    grid-template-columns: minmax(250px, 1fr) 6fr;\n    height: 100vh;\n    width: 100%;\n}\n\n#sidebar {\n    background-color: var(--darkblue);\n    display: flex;\n    flex-direction: column;\n    color: white;\n    padding: 15px;\n    gap: 20px;\n    font-size: 1.2rem;\n}\n\n#profileCon {\n    display: grid;\n    grid-template: 30px 30px / 60px auto;\n    grid-template-areas: \n        \"pic name\"\n        \"pic message\";\n    align-items: center;\n}\n\n#profileCon>img {\n    grid-area: pic;\n    width: 50px;\n    height: 50px;\n    border-radius: 15px;\n}\n\n#profileName {\n    grid-area: name;\n}\n\n#profileScore {\n    grid-area: message;\n}\n\n.sideItems>li {\n    display: flex;\n    padding: 5px;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.3rem;\n    border-radius: 5px;\n}\n\n.sideItems>li:hover {\n    background-color: var(--charcoal);\n    transition: 0.1s;\n    cursor: pointer;\n}\n\n#newProjectSideBar {\n    color: var(--ashgray);\n}\n\n#newProjectSideBar>img {\n    filter: invert(70%) sepia(6%) saturate(619%) hue-rotate(123deg) brightness(99%) contrast(93%);\n}\n\n#newProjectSideBar:hover {\n    color: white;\n}\n\n.sideItems img {\n    width: 30px;\n    height: 30px;\n    filter: brightness(0) invert(1);\n}\n\n#projectList>ul>li {\n    margin: 2px 10px;\n}\n\n#projectList>h3 {\n    margin: 10px 0;\n}\n\n#credits {\n    justify-self: flex-end;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n}\n\n#credits>img {\n    margin: 10px;\n    height: 30px;\n    width: 30px;\n}\n\n#credits:hover {\n    cursor: pointer;\n}\n\n/* ------------------------------------------------- */\n\n#contentContainer {\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 50px auto;\n}\n\n#topNav {\n    background-color: var(--ashgray);\n    display: flex;\n}\n\n#searchCon {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    gap: 5px;\n}\n\n#iconsearch {\n    height: 25px;\n    width: 25px;\n    padding: 8px;\n    border-radius: 8px;\n    transition: 0.1s;\n    position: absolute;\n}\n\n#searchbox {\n    height: 30px;\n    border-radius: 15px;\n    background-color: var(--ashgray);\n    border: none;\n    flex-grow: 1;\n}\n\n/* ------------------------------------------------- */\n\n#content {\n    background-color: white;\n}\n\n/* -----------------New Project Form---------------- */\n\n#blurBG {\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    z-index: 90;\n    backdrop-filter: blur(2px);\n}\n\n#formContainer {\n    position: absolute;\n    z-index: 91;\n    width: 15%;\n    padding: 5px;\n    display: grid;\n    grid-template-rows: 1fr 3fr 1fr;\n    grid-template-areas: \n        'header'\n        'body'\n        'footer';\n    top: 20%;\n    justify-self: center;\n    margin: 0;\n}\n\n#formHeader {\n    display: flex;\n    justify-content: space-between;\n    grid-area: header;\n}\n\n#formHeader>h2 {\n    padding: 0;\n    margin: 0;\n}\n\n#formHeader>img {\n    width: 20px;\n    height: 20px;\n}\n\n#formHeader>img:hover {\n    cursor: pointer;\n}\n\n#formBody {\n    grid-area: body;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#formBody>div {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    font-size: 1.2rem;\n}\n\n.formTextbox {\n\n}\n\n.formTextArea {\n\n}\n\n.formMessage {\n    font-size: 0.8rem;\n    height: 1rem;\n    color: red;\n    margin: 0 0 5px;\n}\n\n.formValid {\n    border-color: green;\n}\n\n.formInvalid {\n    border-color: red;\n}\n\n.formCancel {\n\n}\n\n.formSubmit {\n\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n/* .fade-in {\n    opacity: 1;\n    transition: opacity 0.9s ease;\n} */\n\n.fade-out {\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n}\n\n#formFooter {\n    grid-area: footer;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    gap: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ \"./src/updateDOM.js\");\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newToDo */ \"./src/newToDo.js\");\n\n\n\n\n\n\n\n//Description\nconst projects = (function() {\n\n    //Initiate empty array of projects\n    let myProjects = [];\n\n    return {\n        myProjects,\n    }\n\n})();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n//Project Creator\nconst Project = (title, description, toDoItems, projectStatus, timeCreated) => {\n\n    title = title;\n    description = description;\n    toDoItems = toDoItems;\n    projectStatus = projectStatus;\n    timeCreated = timeCreated;\n\n    return {\n        title,\n        description,\n        toDoItems,\n        projectStatus,\n        timeCreated,\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/newProject.js?");

/***/ }),

/***/ "./src/newToDo.js":
/*!************************!*\
  !*** ./src/newToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDoItem: () => (/* binding */ ToDoItem)\n/* harmony export */ });\n//To Do Creator\nconst ToDoItem = (title, project, description, dueDate, priority, notes, \nchecklist, itemStatus, timeCreated) => {\n\n    title = title;\n    project = project;\n    description = description;\n    dueDate = dueDate;\n    priority = priority;\n    notes = notes;\n    checklist = checklist;\n    itemStatus = itemStatus;\n    timeCreated = timeCreated;\n\n    return {\n        title,\n        project,\n        description,\n        dueDate,\n        priority,\n        notes,\n        checklist,\n        itemStatus,\n        timeCreated,\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/newToDo.js?");

/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listeners: () => (/* binding */ listeners),\n/* harmony export */   newProject: () => (/* binding */ newProject)\n/* harmony export */ });\n//Updates DOM for content\n\n//New Project Form\nconst newProject = (function(doc) {\n    //Creates blur, creates form\n    function showForm() {\n        createBlur();\n        buildForm();\n    }\n\n    //Removes blue, hides form\n    function hideForm() {\n        noBlur();\n\n        const newProjectForm = doc.getElementById('formContainer');\n        newProjectForm.classList.toggle('fade-out');\n        setTimeout(function() {\n            newProjectForm.remove();\n        }, 300);\n    }\n\n    //Create blurry background\n    function createBlur() {\n        const container = doc.getElementById('allContainer');\n        const blurryBackDrop = doc.createElement('div');\n\n        blurryBackDrop.setAttribute('id', 'blurBG');\n\n        container.appendChild(blurryBackDrop);\n    }\n\n    //Removes blurry background;\n    function noBlur() {\n        const blurryBackDrop = doc.getElementById('blurBG');\n        blurryBackDrop.remove();\n    }\n\n    //Create new roject form\n    function buildForm() {\n        const container = doc.getElementById('allContainer');\n\n        //Form container and form\n        const formContainer = doc.createElement('div');\n        formContainer.setAttribute('id', 'formContainer');\n\n        //Form header\n        const formHeader = doc.createElement('div');\n        const formHeaderTitle = doc.createElement('h2');\n        const formHeaderCancel = doc.createElement('img');\n\n        formHeader.setAttribute('id', 'formHeader');\n        formHeaderTitle.textContent = 'New Project';\n        formHeaderCancel.setAttribute('src', './images/close.svg');\n\n        formHeaderCancel.addEventListener('click', hideForm);\n\n        formHeader.appendChild(formHeaderTitle);\n        formHeader.appendChild(formHeaderCancel);\n\n        formContainer.appendChild(formHeader);\n\n        //Form body\n        const newProjectForm = doc.createElement('form');\n        newProjectForm.setAttribute('id', 'formBody');\n        newProjectForm.setAttribute('action', '');\n        newProjectForm.setAttribute('method', 'post');\n\n        const formBody = doc.createElement('div');\n\n            //Project Name\n        const newProjectNameLabel = doc.createElement('label');\n        newProjectNameLabel.setAttribute('for', 'projectname');\n        newProjectNameLabel.textContent = 'Project name';\n\n        const newProjectNameText = doc.createElement('input');\n        newProjectNameText.setAttribute('type', 'text');\n        newProjectNameText.setAttribute('name', 'projectname');\n        newProjectNameText.setAttribute('id', 'projectname');\n        newProjectNameText.setAttribute('minlength', '1');\n        newProjectNameText.setAttribute('minlength', '20');\n        newProjectNameText.required = true;\n\n        const newProjectNameMsg = doc.createElement('p');\n        newProjectNameMsg.textContent = 'Must have a name';\n        newProjectNameMsg.classList.add('formMessage');\n        newProjectNameMsg.classList.add('hidden');\n\n        formBody.appendChild(newProjectNameLabel);\n        formBody.appendChild(newProjectNameText);\n        formBody.appendChild(newProjectNameMsg);\n\n            //Project Description\n        const newProjectDescLabel = doc.createElement('label');\n        newProjectDescLabel.setAttribute('for', 'projectdesc');\n        newProjectDescLabel.textContent = 'Description';\n\n        const newProjectDescText = doc.createElement('textarea');\n        newProjectDescText.setAttribute('name', 'projectdesc');\n        newProjectDescText.setAttribute('id', 'projectdesc');\n        newProjectDescText.setAttribute('rows', '4');\n        newProjectDescText.setAttribute('cols', '50');\n\n        formBody.appendChild(newProjectDescLabel);\n        formBody.appendChild(newProjectDescText);\n        newProjectForm.appendChild(formBody);\n\n        //Form footer\n        const formFooter = doc.createElement('div');\n        formFooter.setAttribute('id', 'formFooter');\n\n        const newProjectCancel = doc.createElement('button');\n        newProjectCancel.textContent = 'Cancel';\n        newProjectCancel.classList.add('formCancel');\n        newProjectCancel.addEventListener('click', hideForm);\n\n        const newProjectSubmit = doc.createElement('button');\n        newProjectSubmit.textContent = 'Submit';\n        newProjectSubmit.classList.add('formSubmit');\n\n        formFooter.appendChild(newProjectCancel);\n        formFooter.appendChild(newProjectSubmit);\n\n        newProjectForm.appendChild(formFooter);\n\n        //Append form and form container to main container\n        formContainer.appendChild(newProjectForm);\n\n        // formContainer.classList.toggle('fade-in');\n        container.appendChild(formContainer);\n    }\n\n    return {\n        showForm,\n        hideForm,\n    }\n})(document);\n\n//Event listeners\nconst listeners = (function(doc) {\n    const newProjectBtn = doc.getElementById('newProjectSideBar');\n    newProjectBtn.addEventListener('click', newProject.showForm);\n})(document);\n\n//# sourceURL=webpack://to-do-list/./src/updateDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;