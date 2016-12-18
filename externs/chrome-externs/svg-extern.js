/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview An extern for SVG.
 * @externs
 */



/**
 * @constructor
 */
function SVGAnimatedNumberList(){}


/**
 * @type {!SVGNumberList}
 */
SVGAnimatedNumberList.prototype.baseVal;


/**
 * @type {!SVGNumberList}
 */
SVGAnimatedNumberList.prototype.animVal;



/**
 * @constructor
 */
function SVGLengthList(){}


/**
 * @type {number}
 */
SVGLengthList.prototype.numberOfItems;


/** */
SVGLengthList.prototype.clear = function(){};


/**
 * @param {!SVGLength} item
 * @return {!SVGLength}
 */
SVGLengthList.prototype.initialize = function(item){};


/**
 * @param {number} index
 * @return {!SVGLength}
 */
SVGLengthList.prototype.getItem = function(index){};


/**
 * @param {!SVGLength} item
 * @param {number} index
 * @return {!SVGLength}
 */
SVGLengthList.prototype.insertItemBefore = function(item, index){};


/**
 * @param {!SVGLength} item
 * @param {number} index
 * @return {!SVGLength}
 */
SVGLengthList.prototype.replaceItem = function(item, index){};


/**
 * @param {number} index
 * @return {!SVGLength}
 */
SVGLengthList.prototype.removeItem = function(index){};


/**
 * @param {!SVGLength} item
 * @return {!SVGLength}
 */
SVGLengthList.prototype.appendItem = function(item){};



/**
 * @constructor
 * @implements {EventTarget}
 */
function SVGElementInstance(){}


/**
 * @type {!SVGElement}
 */
SVGElementInstance.prototype.correspondingElement;


/**
 * @type {!SVGUseElement}
 */
SVGElementInstance.prototype.correspondingUseElement;


/**
 * @type {!SVGElementInstance}
 */
SVGElementInstance.prototype.parentNode;


/**
 * @type {!Array<!SVGElementInstance>|!SVGElementInstanceList}
 */
SVGElementInstance.prototype.childNodes;


/**
 * @type {!SVGElementInstance}
 */
SVGElementInstance.prototype.firstChild;


/**
 * @type {!SVGElementInstance}
 */
SVGElementInstance.prototype.lastChild;


/**
 * @type {!SVGElementInstance}
 */
SVGElementInstance.prototype.previousSibling;


/**
 * @type {!SVGElementInstance}
 */
SVGElementInstance.prototype.nextSibling;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onabort;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onblur;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onchange;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onclick;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.oncontextmenu;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondblclick;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onerror;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onfocus;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.oninput;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onkeydown;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onkeypress;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onkeyup;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onload;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmousedown;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmousemove;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmouseout;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmouseover;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmouseup;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onmousewheel;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onbeforecut;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.oncut;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onbeforecopy;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.oncopy;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onbeforepaste;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onpaste;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondragenter;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondragover;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondragleave;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondrop;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondragstart;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondrag;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.ondragend;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onreset;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onresize;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onscroll;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onsearch;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onselect;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onselectstart;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onsubmit;


/**
 * @type {!EventListener|function(!Event)}
 */
SVGElementInstance.prototype.onunload;


/**
 * @param {string} type
 * @param {!EventListener|(function(!Event): (boolean|undefined))|null} listener
 * @param {boolean=} opt_useCapture
 * @override
 * @return {undefined}
 */
SVGElementInstance.prototype.addEventListener = function(type, listener, opt_useCapture){};


/**
 * @param {string} type
 * @param {!EventListener|(function(!Event): (boolean|undefined))|null} listener
 * @param {boolean=} opt_useCapture
 * @override
 * @return {undefined}
 */
SVGElementInstance.prototype.removeEventListener = function(type, listener, opt_useCapture){};


/**
 * @param {!Event} event
 * @return {boolean}
 * @override
 */
SVGElementInstance.prototype.dispatchEvent = function(event){};



/**
 * @constructor
 */
function SVGAnimatedRect(){}


/**
 * @type {!SVGRect}
 */
SVGAnimatedRect.prototype.baseVal;


/**
 * @type {!SVGRect}
 */
SVGAnimatedRect.prototype.animVal;



/**
 * @constructor
 */
function SVGAnimatedString(){}


/**
 * @type {string}
 */
SVGAnimatedString.prototype.baseVal;


/**
 * @type {string}
 */
SVGAnimatedString.prototype.animVal;



/**
 * @interface
 */
function SVGStylable(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGStylable.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGStylable.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 */
SVGStylable.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @interface
 */
function SVGExternalResourcesRequired(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGExternalResourcesRequired.prototype.externalResourcesRequired;



/**
 * @constructor
 */
function SVGPoint(){}


/**
 * @type {number}
 */
SVGPoint.prototype.x;


/**
 * @type {number}
 */
SVGPoint.prototype.y;


/**
 * @param {!SVGMatrix} matrix
 * @return {!SVGPoint}
 */
SVGPoint.prototype.matrixTransform = function(matrix){};



/**
 * @constructor
 */
function SVGMatrix(){}


/**
 * @type {number}
 */
SVGMatrix.prototype.a;


/**
 * @type {number}
 */
SVGMatrix.prototype.b;


/**
 * @type {number}
 */
SVGMatrix.prototype.c;


/**
 * @type {number}
 */
SVGMatrix.prototype.d;


/**
 * @type {number}
 */
SVGMatrix.prototype.e;


/**
 * @type {number}
 */
SVGMatrix.prototype.f;


/**
 * @param {!SVGMatrix} secondMatrix
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.multiply = function(secondMatrix){};


/**
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.inverse = function(){};


/**
 * @param {number} x
 * @param {number} y
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.translate = function(x, y){};


/**
 * @param {number} scaleFactor
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.scale = function(scaleFactor){};


/**
 * @param {number} scaleFactorX
 * @param {number} scaleFactorY
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.scaleNonUniform = function(scaleFactorX, scaleFactorY){};


/**
 * @param {number} angle
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.rotate = function(angle){};


/**
 * @param {number} x
 * @param {number} y
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.rotateFromVector = function(x, y){};


/**
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.flipX = function(){};


/**
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.flipY = function(){};


/**
 * @param {number} angle
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.skewX = function(angle){};


/**
 * @param {number} angle
 * @return {!SVGMatrix}
 */
SVGMatrix.prototype.skewY = function(angle){};



/**
 * @constructor
 */
function SVGNumberList(){}


/**
 * @type {number}
 */
SVGNumberList.prototype.numberOfItems;


/** */
SVGNumberList.prototype.clear = function(){};


/**
 * @param {!SVGNumber} item
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.initialize = function(item){};


/**
 * @param {number} index
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.getItem = function(index){};


/**
 * @param {!SVGNumber} item
 * @param {number} index
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.insertItemBefore = function(item, index){};


/**
 * @param {!SVGNumber} item
 * @param {number} index
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.replaceItem = function(item, index){};


/**
 * @param {number} index
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.removeItem = function(index){};


/**
 * @param {!SVGNumber} item
 * @return {!SVGNumber}
 */
SVGNumberList.prototype.appendItem = function(item){};



/**
 * @interface
 */
function SVGLangSpace(){}


/**
 * @type {string}
 */
SVGLangSpace.prototype.xmllang;


/**
 * @type {string}
 */
SVGLangSpace.prototype.xmlspace;



/**
 * @constructor
 */
function SVGAnimatedLengthList(){}


/**
 * @type {!SVGLengthList}
 */
SVGAnimatedLengthList.prototype.baseVal;


/**
 * @type {!SVGLengthList}
 */
SVGAnimatedLengthList.prototype.animVal;



/**
 * @constructor
 */
function SVGAnimatedTransformList(){}


/**
 * @type {!SVGTransformList}
 */
SVGAnimatedTransformList.prototype.baseVal;


/**
 * @type {!SVGTransformList}
 */
SVGAnimatedTransformList.prototype.animVal;



/**
 * @constructor
 */
function SVGUnitTypes(){}


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.SVG_UNIT_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.prototype.SVG_UNIT_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE;


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.prototype.SVG_UNIT_TYPE_USERSPACEONUSE;


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;


/**
 * @const
 * @type {number}
 */
SVGUnitTypes.prototype.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;



/**
 * @constructor
 */
function SVGLength(){}


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_NUMBER;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_NUMBER;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_PERCENTAGE;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_PERCENTAGE;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_EMS;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_EMS;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_EXS;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_EXS;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_PX;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_PX;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_CM;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_CM;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_MM;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_MM;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_IN;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_IN;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_PT;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_PT;


/**
 * @const
 * @type {number}
 */
SVGLength.SVG_LENGTHTYPE_PC;


/**
 * @const
 * @type {number}
 */
SVGLength.prototype.SVG_LENGTHTYPE_PC;


/**
 * @type {number}
 */
SVGLength.prototype.unitType;


/**
 * @type {number}
 */
SVGLength.prototype.value;


/**
 * @type {number}
 */
SVGLength.prototype.valueInSpecifiedUnits;


/**
 * @type {string}
 */
SVGLength.prototype.valueAsString;


/**
 * @param {number} unitType
 * @param {number} valueInSpecifiedUnits
 * @return {undefined}
 */
SVGLength.prototype.newValueSpecifiedUnits = function(unitType, valueInSpecifiedUnits){};


/**
 * @param {number} unitType
 * @return {undefined}
 */
SVGLength.prototype.convertToSpecifiedUnits = function(unitType){};



/**
 * @constructor
 */
function SVGAnimatedNumber(){}


/**
 * @type {number}
 */
SVGAnimatedNumber.prototype.baseVal;


/**
 * @type {number}
 */
SVGAnimatedNumber.prototype.animVal;



/**
 * @constructor
 */
function SVGAnimatedAngle(){}


/**
 * @type {!SVGAngle}
 */
SVGAnimatedAngle.prototype.baseVal;


/**
 * @type {!SVGAngle}
 */
SVGAnimatedAngle.prototype.animVal;



/**
 * @interface
 * @extends {SVGStylable}
 */
function SVGFilterPrimitiveStandardAttributes(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterPrimitiveStandardAttributes.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterPrimitiveStandardAttributes.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterPrimitiveStandardAttributes.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterPrimitiveStandardAttributes.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFilterPrimitiveStandardAttributes.prototype.result;



/**
 * @constructor
 * @extends {SVGGradientElement}
 */
function SVGLinearGradientElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGLinearGradientElement.prototype.x1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLinearGradientElement.prototype.y1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLinearGradientElement.prototype.x2;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLinearGradientElement.prototype.y2;



/**
 * @constructor
 * @extends {SVGGradientElement}
 */
function SVGRadialGradientElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGRadialGradientElement.prototype.cx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRadialGradientElement.prototype.cy;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRadialGradientElement.prototype.r;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRadialGradientElement.prototype.fx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRadialGradientElement.prototype.fy;



/**
 * @constructor
 */
function SVGTransform(){}


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_MATRIX;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_MATRIX;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_TRANSLATE;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_TRANSLATE;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_SCALE;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_SCALE;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_ROTATE;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_ROTATE;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_SKEWX;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_SKEWX;


/**
 * @const
 * @type {number}
 */
SVGTransform.SVG_TRANSFORM_SKEWY;


/**
 * @const
 * @type {number}
 */
SVGTransform.prototype.SVG_TRANSFORM_SKEWY;


/**
 * @type {number}
 */
SVGTransform.prototype.type;


/**
 * @type {!SVGMatrix}
 */
SVGTransform.prototype.matrix;


/**
 * @type {number}
 */
SVGTransform.prototype.angle;


/**
 * @param {!SVGMatrix} matrix
 * @return {undefined}
 */
SVGTransform.prototype.setMatrix = function(matrix){};


/**
 * @param {number} tx
 * @param {number} ty
 * @return {undefined}
 */
SVGTransform.prototype.setTranslate = function(tx, ty){};


/**
 * @param {number} sx
 * @param {number} sy
 * @return {undefined}
 */
SVGTransform.prototype.setScale = function(sx, sy){};


/**
 * @param {number} angle
 * @param {number} cx
 * @param {number} cy
 * @return {undefined}
 */
SVGTransform.prototype.setRotate = function(angle, cx, cy){};


/**
 * @param {number} angle
 * @return {undefined}
 */
SVGTransform.prototype.setSkewX = function(angle){};


/**
 * @param {number} angle
 * @return {undefined}
 */
SVGTransform.prototype.setSkewY = function(angle){};



/**
 * @interface
 */
function SVGZoomAndPan(){}


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.prototype.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.prototype.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @const
 * @type {number}
 */
SVGZoomAndPan.prototype.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @type {number}
 */
SVGZoomAndPan.prototype.zoomAndPan;



/**
 * @constructor
 */
function SVGPreserveAspectRatio(){}


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_NONE;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMINYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMIDYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMAXYMIN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMINYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMIDYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMAXYMID;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMINYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMIDYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_PRESERVEASPECTRATIO_XMAXYMAX;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_MEETORSLICE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_MEETORSLICE_MEET;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE;


/**
 * @const
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.SVG_MEETORSLICE_SLICE;


/**
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.align;


/**
 * @type {number}
 */
SVGPreserveAspectRatio.prototype.meetOrSlice;



/**
 * @constructor
 */
function SVGRect(){}


/**
 * @type {number}
 */
SVGRect.prototype.x;


/**
 * @type {number}
 */
SVGRect.prototype.y;


/**
 * @type {number}
 */
SVGRect.prototype.width;


/**
 * @type {number}
 */
SVGRect.prototype.height;



/**
 * @constructor
 */
function SVGException(){}


/**
 * @const
 * @type {number}
 */
SVGException.SVG_WRONG_TYPE_ERR;


/**
 * @const
 * @type {number}
 */
SVGException.prototype.SVG_WRONG_TYPE_ERR;


/**
 * @const
 * @type {number}
 */
SVGException.SVG_INVALID_VALUE_ERR;


/**
 * @const
 * @type {number}
 */
SVGException.prototype.SVG_INVALID_VALUE_ERR;


/**
 * @const
 * @type {number}
 */
SVGException.SVG_MATRIX_NOT_INVERTABLE;


/**
 * @const
 * @type {number}
 */
SVGException.prototype.SVG_MATRIX_NOT_INVERTABLE;


/**
 * @type {number}
 */
SVGException.prototype.code;


/**
 * @type {string}
 */
SVGException.prototype.name;


/**
 * @type {string}
 */
SVGException.prototype.message;


/**
 * @return {string}
 * @override
 */
SVGException.prototype.toString = function(){};



/**
 * @constructor
 * @extends {CSSValue}
 */
function SVGColor(){}


/**
 * @const
 * @type {number}
 */
SVGColor.SVG_COLORTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGColor.prototype.SVG_COLORTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGColor.SVG_COLORTYPE_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGColor.prototype.SVG_COLORTYPE_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGColor.SVG_COLORTYPE_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGColor.prototype.SVG_COLORTYPE_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGColor.SVG_COLORTYPE_CURRENTCOLOR;


/**
 * @const
 * @type {number}
 */
SVGColor.prototype.SVG_COLORTYPE_CURRENTCOLOR;


/**
 * @type {number}
 */
SVGColor.prototype.colorType;


/**
 * @type {!RGBColor}
 */
SVGColor.prototype.rgbColor;


/**
 * @param {string} rgbColor
 * @return {undefined}
 */
SVGColor.prototype.setRGBColor = function(rgbColor){};


/**
 * @param {string} rgbColor
 * @param {string} iccColor
 * @return {undefined}
 */
SVGColor.prototype.setRGBColorICCColor = function(rgbColor, iccColor){};


/**
 * @param {number} colorType
 * @param {string} rgbColor
 * @param {string} iccColor
 * @return {undefined}
 */
SVGColor.prototype.setColor = function(colorType, rgbColor, iccColor){};



/**
 * @constructor
 * @extends {SVGColor}
 */
function SVGPaint(){}


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_NONE;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_NONE;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_CURRENTCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_URI_NONE;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_URI_NONE;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_URI_CURRENTCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_URI_CURRENTCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_URI_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_URI_RGBCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR;


/**
 * @const
 * @type {number}
 */
SVGPaint.SVG_PAINTTYPE_URI;


/**
 * @const
 * @type {number}
 */
SVGPaint.prototype.SVG_PAINTTYPE_URI;


/**
 * @type {number}
 */
SVGPaint.prototype.paintType;


/**
 * @type {string}
 */
SVGPaint.prototype.uri;


/**
 * @param {string} uri
 * @return {undefined}
 */
SVGPaint.prototype.setUri = function(uri){};


/**
 * @param {number} paintType
 * @param {string} uri
 * @param {string} rgbColor
 * @param {string} iccColor
 * @return {undefined}
 */
SVGPaint.prototype.setPaint = function(paintType, uri, rgbColor, iccColor){};



/**
 * @constructor
 */
function SVGPointList(){}


/**
 * @type {number}
 */
SVGPointList.prototype.numberOfItems;


/** */
SVGPointList.prototype.clear = function(){};


/**
 * @param {!SVGPoint} item
 * @return {!SVGPoint}
 */
SVGPointList.prototype.initialize = function(item){};


/**
 * @param {number} index
 * @return {!SVGPoint}
 */
SVGPointList.prototype.getItem = function(index){};


/**
 * @param {!SVGPoint} item
 * @param {number} index
 * @return {!SVGPoint}
 */
SVGPointList.prototype.insertItemBefore = function(item, index){};


/**
 * @param {!SVGPoint} item
 * @param {number} index
 * @return {!SVGPoint}
 */
SVGPointList.prototype.replaceItem = function(item, index){};


/**
 * @param {number} index
 * @return {!SVGPoint}
 */
SVGPointList.prototype.removeItem = function(index){};


/**
 * @param {!SVGPoint} item
 * @return {!SVGPoint}
 */
SVGPointList.prototype.appendItem = function(item){};



/**
 * @constructor
 */
function SVGTransformList(){}


/**
 * @type {number}
 */
SVGTransformList.prototype.numberOfItems;


/** */
SVGTransformList.prototype.clear = function(){};


/**
 * @param {!SVGTransform} item
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.initialize = function(item){};


/**
 * @param {number} index
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.getItem = function(index){};


/**
 * @param {!SVGTransform} item
 * @param {number} index
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.insertItemBefore = function(item, index){};


/**
 * @param {!SVGTransform} item
 * @param {number} index
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.replaceItem = function(item, index){};


/**
 * @param {number} index
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.removeItem = function(index){};


/**
 * @param {!SVGTransform} item
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.appendItem = function(item){};


/**
 * @param {!SVGMatrix} matrix
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.createSVGTransformFromMatrix = function(matrix){};


/**
 * @return {!SVGTransform}
 */
SVGTransformList.prototype.consolidate = function(){};



/**
 * @constructor
 * @extends {UIEvent}
 */
function SVGZoomEvent(){}


/**
 * @type {!SVGRect}
 */
SVGZoomEvent.prototype.zoomRectScreen;


/**
 * @type {number}
 */
SVGZoomEvent.prototype.previousScale;


/**
 * @type {!SVGPoint}
 */
SVGZoomEvent.prototype.previousTranslate;


/**
 * @type {number}
 */
SVGZoomEvent.prototype.newScale;


/**
 * @type {!SVGPoint}
 */
SVGZoomEvent.prototype.newTranslate;



/**
 * @constructor
 * @extends {SVGTextContentElement}
 */
function SVGTextPositioningElement(){}


/**
 * @type {!SVGAnimatedLengthList}
 */
SVGTextPositioningElement.prototype.x;


/**
 * @type {!SVGAnimatedLengthList}
 */
SVGTextPositioningElement.prototype.y;


/**
 * @type {!SVGAnimatedLengthList}
 */
SVGTextPositioningElement.prototype.dx;


/**
 * @type {!SVGAnimatedLengthList}
 */
SVGTextPositioningElement.prototype.dy;


/**
 * @type {!SVGAnimatedNumberList}
 */
SVGTextPositioningElement.prototype.rotate;



/**
 * @constructor
 * @extends {SVGTextPositioningElement}
 */
function SVGTSpanElement(){}



/**
 * @constructor
 */
function SVGStringList(){}


/**
 * @type {number}
 */
SVGStringList.prototype.numberOfItems;


/** */
SVGStringList.prototype.clear = function(){};


/**
 * @param {string} item
 * @return {string}
 */
SVGStringList.prototype.initialize = function(item){};


/**
 * @param {number} index
 * @return {string}
 */
SVGStringList.prototype.getItem = function(index){};


/**
 * @param {string} item
 * @param {number} index
 * @return {string}
 */
SVGStringList.prototype.insertItemBefore = function(item, index){};


/**
 * @param {string} item
 * @param {number} index
 * @return {string}
 */
SVGStringList.prototype.replaceItem = function(item, index){};


/**
 * @param {number} index
 * @return {string}
 */
SVGStringList.prototype.removeItem = function(index){};


/**
 * @param {string} item
 * @return {string}
 */
SVGStringList.prototype.appendItem = function(item){};



/**
 * @interface
 */
function SVGURIReference(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGURIReference.prototype.href;



/**
 * @constructor
 * @extends {SVGTextPositioningElement}
 * @implements {SVGURIReference}
 */
function SVGTRefElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGTRefElement.prototype.href;



/**
 * @constructor
 * @extends {SVGTextContentElement}
 * @implements {SVGURIReference}
 */
function SVGTextPathElement(){}


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_METHODTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_METHODTYPE_ALIGN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_METHODTYPE_STRETCH;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_SPACINGTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_SPACINGTYPE_AUTO;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT;


/**
 * @const
 * @type {number}
 */
SVGTextPathElement.prototype.TEXTPATH_SPACINGTYPE_EXACT;


/**
 * @type {!SVGAnimatedLength}
 */
SVGTextPathElement.prototype.startOffset;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGTextPathElement.prototype.method;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGTextPathElement.prototype.spacing;


/**
 * @type {!SVGAnimatedString}
 */
SVGTextPathElement.prototype.href;



/**
 * @constructor
 * @extends {SVGTextPositioningElement}
 * @implements {SVGURIReference}
 */
function SVGAltGlyphElement(){}


/**
 * @type {string}
 */
SVGAltGlyphElement.prototype.glyphRef;


/**
 * @type {string}
 */
SVGAltGlyphElement.prototype.format;


/**
 * @type {!SVGAnimatedString}
 */
SVGAltGlyphElement.prototype.href;



/**
 * @constructor
 * @extends {SVGComponentTransferFunctionElement}
 */
function SVGFEFuncGElement(){}



/**
 * @constructor
 * @extends {SVGComponentTransferFunctionElement}
 */
function SVGFEFuncAElement(){}



/**
 * @constructor
 * @extends {SVGComponentTransferFunctionElement}
 */
function SVGFEFuncRElement(){}



/**
 * @constructor
 */
function SVGNumber(){}


/**
 * @type {number}
 */
SVGNumber.prototype.value;



/**
 * @interface
 */
function SVGTests(){}


/**
 * @type {!SVGStringList}
 */
SVGTests.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGTests.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGTests.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 */
SVGTests.prototype.hasExtension = function(opt_extension){};



/**
 * @constructor
 */
function SVGPathSeg(){}


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CLOSEPATH;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CLOSEPATH;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_MOVETO_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_MOVETO_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_MOVETO_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_MOVETO_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_CUBIC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_CUBIC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_QUADRATIC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_QUADRATIC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_ARC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_ARC_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_ARC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_ARC_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_HORIZONTAL_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_HORIZONTAL_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_VERTICAL_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_LINETO_VERTICAL_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;


/**
 * @const
 * @type {number}
 */
SVGPathSeg.prototype.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;


/**
 * @type {number}
 */
SVGPathSeg.prototype.pathSegType;


/**
 * @type {string}
 */
SVGPathSeg.prototype.pathSegTypeAsLetter;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoQuadraticSmoothAbs(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticSmoothAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticSmoothAbs.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegArcRel(){}


/**
 * @type {number}
 */
SVGPathSegArcRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegArcRel.prototype.y;


/**
 * @type {number}
 */
SVGPathSegArcRel.prototype.r1;


/**
 * @type {number}
 */
SVGPathSegArcRel.prototype.r2;


/**
 * @type {number}
 */
SVGPathSegArcRel.prototype.angle;


/**
 * @type {boolean}
 */
SVGPathSegArcRel.prototype.largeArcFlag;


/**
 * @type {boolean}
 */
SVGPathSegArcRel.prototype.sweepFlag;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoQuadraticAbs(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticAbs.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticAbs.prototype.x1;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticAbs.prototype.y1;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoHorizontalRel(){}


/**
 * @type {number}
 */
SVGPathSegLinetoHorizontalRel.prototype.x;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoRel(){}


/**
 * @type {number}
 */
SVGPathSegLinetoRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegLinetoRel.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoCubicRel(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.x1;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.y1;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.x2;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicRel.prototype.y2;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegMovetoAbs(){}


/**
 * @type {number}
 */
SVGPathSegMovetoAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegMovetoAbs.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoQuadraticSmoothRel(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticSmoothRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticSmoothRel.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoVerticalRel(){}


/**
 * @type {number}
 */
SVGPathSegLinetoVerticalRel.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoAbs(){}


/**
 * @type {number}
 */
SVGPathSegLinetoAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegLinetoAbs.prototype.y;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoCubicSmoothRel(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.x2;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.y2;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoHorizontalAbs(){}


/**
 * @type {number}
 */
SVGPathSegLinetoHorizontalAbs.prototype.x;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoQuadraticRel(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticRel.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticRel.prototype.x1;


/**
 * @type {number}
 */
SVGPathSegCurvetoQuadraticRel.prototype.y1;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoCubicSmoothAbs(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.x2;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.y2;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegCurvetoCubicAbs(){}


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.y;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.x1;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.y1;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.x2;


/**
 * @type {number}
 */
SVGPathSegCurvetoCubicAbs.prototype.y2;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegClosePath(){}



/**
 * @interface
 */
function SVGFitToViewBox(){}


/**
 * @type {!SVGAnimatedRect}
 */
SVGFitToViewBox.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGFitToViewBox.prototype.preserveAspectRatio;



/**
 * @constructor
 * @implements {SVGZoomAndPan}
 * @implements {SVGFitToViewBox}
 */
function SVGViewSpec(){}


/**
 * @type {!SVGTransformList}
 */
SVGViewSpec.prototype.transform;


/**
 * @type {!SVGElement}
 */
SVGViewSpec.prototype.viewTarget;


/**
 * @type {string}
 */
SVGViewSpec.prototype.viewBoxString;


/**
 * @type {string}
 */
SVGViewSpec.prototype.preserveAspectRatioString;


/**
 * @type {string}
 */
SVGViewSpec.prototype.transformString;


/**
 * @type {string}
 */
SVGViewSpec.prototype.viewTargetString;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.prototype.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.prototype.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @const
 * @type {number}
 */
SVGViewSpec.prototype.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @type {number}
 */
SVGViewSpec.prototype.zoomAndPan;


/**
 * @type {!SVGAnimatedRect}
 */
SVGViewSpec.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGViewSpec.prototype.preserveAspectRatio;



/**
 * @constructor
 */
function SVGRenderingIntent(){}


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_AUTO;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_AUTO;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_PERCEPTUAL;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_PERCEPTUAL;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_RELATIVE_COLORIMETRIC;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_RELATIVE_COLORIMETRIC;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_SATURATION;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_SATURATION;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.RENDERING_INTENT_ABSOLUTE_COLORIMETRIC;


/**
 * @const
 * @type {number}
 */
SVGRenderingIntent.prototype.RENDERING_INTENT_ABSOLUTE_COLORIMETRIC;



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegLinetoVerticalAbs(){}


/**
 * @type {number}
 */
SVGPathSegLinetoVerticalAbs.prototype.y;



/**
 * @constructor
 */
function SVGPathSegList(){}


/**
 * @type {number}
 */
SVGPathSegList.prototype.numberOfItems;


/** */
SVGPathSegList.prototype.clear = function(){};


/**
 * @param {!SVGPathSeg} newItem
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.initialize = function(newItem){};


/**
 * @param {number} index
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.getItem = function(index){};


/**
 * @param {!SVGPathSeg} newItem
 * @param {number} index
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.insertItemBefore = function(newItem, index){};


/**
 * @param {!SVGPathSeg} newItem
 * @param {number} index
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.replaceItem = function(newItem, index){};


/**
 * @param {number} index
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.removeItem = function(index){};


/**
 * @param {!SVGPathSeg} newItem
 * @return {!SVGPathSeg}
 */
SVGPathSegList.prototype.appendItem = function(newItem){};



/**
 * @constructor
 * @extends {Document}
 */
function SVGDocument(){}


/**
 * @type {!SVGSVGElement}
 */
SVGDocument.prototype.rootElement;


/**
 * @param {string=} opt_eventType
 * @return {!Event}
 * @override
 */
SVGDocument.prototype.createEvent = function(opt_eventType){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGAltGlyphItemElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontFaceFormatElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFECompositeElement(){}


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OVER;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_OVER;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_IN;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OUT;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_OUT;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ATOP;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_ATOP;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_XOR;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_XOR;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ARITHMETIC;


/**
 * @const
 * @type {number}
 */
SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_ARITHMETIC;


/**
 * @type {!SVGAnimatedString}
 */
SVGFECompositeElement.prototype.in1;


/**
 * @type {!SVGAnimatedString}
 */
SVGFECompositeElement.prototype.in2;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFECompositeElement.prototype.operator;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFECompositeElement.prototype.k1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFECompositeElement.prototype.k2;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFECompositeElement.prototype.k3;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFECompositeElement.prototype.k4;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFECompositeElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFECompositeElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFECompositeElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFECompositeElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFECompositeElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFECompositeElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFECompositeElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFECompositeElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGLangSpace}
 * @implements {SVGStylable}
 */
function SVGDescElement(){}


/**
 * @type {string}
 */
SVGDescElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGDescElement.prototype.xmlspace;


/**
 * @type {!SVGAnimatedString}
 */
SVGDescElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGDescElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGDescElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGEllipseElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGEllipseElement.prototype.cx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGEllipseElement.prototype.cy;


/**
 * @type {!SVGAnimatedLength}
 */
SVGEllipseElement.prototype.rx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGEllipseElement.prototype.ry;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGEllipseElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGEllipseElement.prototype.transform;


/**
 * @type {string}
 */
SVGEllipseElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGEllipseElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGEllipseElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 * @override
 */
SVGEllipseElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGEllipseElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGEllipseElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGEllipseElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGEllipseElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGEllipseElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGEllipseElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGEllipseElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGEllipseElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGEllipseElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGEllipseElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGEllipseElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFESpecularLightingElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFESpecularLightingElement.prototype.in1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpecularLightingElement.prototype.surfaceScale;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpecularLightingElement.prototype.specularConstant;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpecularLightingElement.prototype.specularExponent;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFESpecularLightingElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFESpecularLightingElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFESpecularLightingElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFESpecularLightingElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFESpecularLightingElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFESpecularLightingElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFESpecularLightingElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFESpecularLightingElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEColorMatrixElement(){}


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.prototype.SVG_FECOLORMATRIX_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_MATRIX;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.prototype.SVG_FECOLORMATRIX_TYPE_MATRIX;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.prototype.SVG_FECOLORMATRIX_TYPE_SATURATE;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_HUEROTATE;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.prototype.SVG_FECOLORMATRIX_TYPE_HUEROTATE;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA;


/**
 * @const
 * @type {number}
 */
SVGFEColorMatrixElement.prototype.SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEColorMatrixElement.prototype.in1;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEColorMatrixElement.prototype.type;


/**
 * @type {!SVGAnimatedNumberList}
 */
SVGFEColorMatrixElement.prototype.values;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEColorMatrixElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEColorMatrixElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEColorMatrixElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEColorMatrixElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEColorMatrixElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEColorMatrixElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEColorMatrixElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEColorMatrixElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGFitToViewBox}
 */
function SVGSymbolElement(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGSymbolElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedRect}
 */
SVGSymbolElement.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGSymbolElement.prototype.preserveAspectRatio;


/**
 * @type {string}
 */
SVGSymbolElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGSymbolElement.prototype.xmlspace;


/**
 * @type {!SVGAnimatedString}
 */
SVGSymbolElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGSymbolElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGSymbolElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEConvolveMatrixElement(){}


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.prototype.SVG_EDGEMODE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_DUPLICATE;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.prototype.SVG_EDGEMODE_DUPLICATE;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_WRAP;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.prototype.SVG_EDGEMODE_WRAP;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_NONE;


/**
 * @const
 * @type {number}
 */
SVGFEConvolveMatrixElement.prototype.SVG_EDGEMODE_NONE;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEConvolveMatrixElement.prototype.in1;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFEConvolveMatrixElement.prototype.orderX;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFEConvolveMatrixElement.prototype.orderY;


/**
 * @type {!SVGAnimatedNumberList}
 */
SVGFEConvolveMatrixElement.prototype.kernelMatrix;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEConvolveMatrixElement.prototype.divisor;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEConvolveMatrixElement.prototype.bias;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFEConvolveMatrixElement.prototype.targetX;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFEConvolveMatrixElement.prototype.targetY;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEConvolveMatrixElement.prototype.edgeMode;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEConvolveMatrixElement.prototype.kernelUnitLengthX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEConvolveMatrixElement.prototype.kernelUnitLengthY;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGFEConvolveMatrixElement.prototype.preserveAlpha;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEConvolveMatrixElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEConvolveMatrixElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEConvolveMatrixElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEConvolveMatrixElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEConvolveMatrixElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEConvolveMatrixElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEConvolveMatrixElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEConvolveMatrixElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEFloodElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEFloodElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEFloodElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEFloodElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEFloodElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEFloodElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEFloodElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEFloodElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEFloodElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGStylable}
 */
function SVGStopElement(){}


/**
 * @type {!SVGAnimatedNumber}
 */
SVGStopElement.prototype.offset;


/**
 * @type {!SVGAnimatedString}
 */
SVGStopElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGStopElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGStopElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGGlyphElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGHKernElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGVKernElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEOffsetElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEOffsetElement.prototype.in1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEOffsetElement.prototype.dx;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEOffsetElement.prototype.dy;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEOffsetElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEOffsetElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEOffsetElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEOffsetElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEOffsetElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEOffsetElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEOffsetElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEOffsetElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 */
function SVGFilterElement(){}


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFilterElement.prototype.filterUnits;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFilterElement.prototype.primitiveUnits;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFilterElement.prototype.height;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFilterElement.prototype.filterResX;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFilterElement.prototype.filterResY;


/**
 * @param {number=} opt_filterResX
 * @param {number=} opt_filterResY
 * @return {undefined}
 */
SVGFilterElement.prototype.setFilterRes = function(opt_filterResX, opt_filterResY){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGFilterElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGFilterElement.prototype.href;


/**
 * @type {!SVGAnimatedString}
 */
SVGFilterElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFilterElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFilterElement.prototype.getPresentationAttribute = function(opt_name){};


/**
 * @type {string}
 */
SVGFilterElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGFilterElement.prototype.xmlspace;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEGaussianBlurElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEGaussianBlurElement.prototype.in1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEGaussianBlurElement.prototype.stdDeviationX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEGaussianBlurElement.prototype.stdDeviationY;


/**
 * @param {number=} opt_stdDeviationX
 * @param {number=} opt_stdDeviationY
 * @return {undefined}
 */
SVGFEGaussianBlurElement.prototype.setStdDeviation = function(opt_stdDeviationX, opt_stdDeviationY){};


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEGaussianBlurElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEGaussianBlurElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEGaussianBlurElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEGaussianBlurElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEGaussianBlurElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEGaussianBlurElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEGaussianBlurElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEGaussianBlurElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGAltGlyphDefElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGComponentTransferFunctionElement(){}


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_TABLE;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA;


/**
 * @const
 * @type {number}
 */
SVGComponentTransferFunctionElement.prototype.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGComponentTransferFunctionElement.prototype.type;


/**
 * @type {!SVGAnimatedNumberList}
 */
SVGComponentTransferFunctionElement.prototype.tableValues;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGComponentTransferFunctionElement.prototype.slope;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGComponentTransferFunctionElement.prototype.intercept;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGComponentTransferFunctionElement.prototype.amplitude;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGComponentTransferFunctionElement.prototype.exponent;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGComponentTransferFunctionElement.prototype.offset;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGMetadataElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGLangSpace}
 * @implements {SVGStylable}
 */
function SVGTitleElement(){}


/**
 * @type {string}
 */
SVGTitleElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGTitleElement.prototype.xmlspace;


/**
 * @type {!SVGAnimatedString}
 */
SVGTitleElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGTitleElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGTitleElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGTests}
 * @implements {SVGExternalResourcesRequired}
 */
function SVGCursorElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGCursorElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGCursorElement.prototype.y;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGCursorElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGCursorElement.prototype.href;


/**
 * @type {!SVGStringList}
 */
SVGCursorElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGCursorElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGCursorElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGCursorElement.prototype.hasExtension = function(opt_extension){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 */
function SVGGradientElement(){}


/**
 * @const
 * @type {number}
 */
SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.prototype.SVG_SPREADMETHOD_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.SVG_SPREADMETHOD_PAD;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.prototype.SVG_SPREADMETHOD_PAD;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.SVG_SPREADMETHOD_REFLECT;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.prototype.SVG_SPREADMETHOD_REFLECT;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.SVG_SPREADMETHOD_REPEAT;


/**
 * @const
 * @type {number}
 */
SVGGradientElement.prototype.SVG_SPREADMETHOD_REPEAT;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGGradientElement.prototype.gradientUnits;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGGradientElement.prototype.gradientTransform;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGGradientElement.prototype.spreadMethod;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGGradientElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGGradientElement.prototype.href;


/**
 * @type {!SVGAnimatedString}
 */
SVGGradientElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGGradientElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGGradientElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGFitToViewBox}
 */
function SVGMarkerElement(){}


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKERUNITS_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKERUNITS_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKERUNITS_USERSPACEONUSE;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKERUNITS_STROKEWIDTH;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKER_ORIENT_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKER_ORIENT_AUTO;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKER_ORIENT_AUTO;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.SVG_MARKER_ORIENT_ANGLE;


/**
 * @const
 * @type {number}
 */
SVGMarkerElement.prototype.SVG_MARKER_ORIENT_ANGLE;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMarkerElement.prototype.refX;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMarkerElement.prototype.refY;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGMarkerElement.prototype.markerUnits;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMarkerElement.prototype.markerWidth;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMarkerElement.prototype.markerHeight;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGMarkerElement.prototype.orientType;


/**
 * @type {!SVGAnimatedAngle}
 */
SVGMarkerElement.prototype.orientAngle;


/** */
SVGMarkerElement.prototype.setOrientToAuto = function(){};


/**
 * @param {!SVGAngle=} opt_angle
 * @return {undefined}
 */
SVGMarkerElement.prototype.setOrientToAngle = function(opt_angle){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGMarkerElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedRect}
 */
SVGMarkerElement.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGMarkerElement.prototype.preserveAspectRatio;


/**
 * @type {string}
 */
SVGMarkerElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGMarkerElement.prototype.xmlspace;


/**
 * @type {!SVGAnimatedString}
 */
SVGMarkerElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGMarkerElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGMarkerElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 */
function SVGMaskElement(){}


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGMaskElement.prototype.maskUnits;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGMaskElement.prototype.maskContentUnits;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMaskElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMaskElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMaskElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGMaskElement.prototype.height;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGMaskElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGStringList}
 */
SVGMaskElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGMaskElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGMaskElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGMaskElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGMaskElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGMaskElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGMaskElement.prototype.getPresentationAttribute = function(opt_name){};


/**
 * @type {string}
 */
SVGMaskElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGMaskElement.prototype.xmlspace;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGFitToViewBox}
 * @implements {SVGZoomAndPan}
 */
function SVGViewElement(){}


/**
 * @type {!SVGStringList}
 */
SVGViewElement.prototype.viewTarget;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGViewElement.prototype.externalResourcesRequired;


/**
 * @const
 * @type {number}
 */
SVGViewElement.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGViewElement.prototype.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGViewElement.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGViewElement.prototype.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGViewElement.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @const
 * @type {number}
 */
SVGViewElement.prototype.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @type {number}
 */
SVGViewElement.prototype.zoomAndPan;


/**
 * @type {!SVGAnimatedRect}
 */
SVGViewElement.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGViewElement.prototype.preserveAspectRatio;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGExternalResourcesRequired}
 */
function SVGMPathElement(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGMPathElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGMPathElement.prototype.href;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontFaceSrcElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEImageElement(){}


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGFEImageElement.prototype.preserveAspectRatio;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEImageElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEImageElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEImageElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEImageElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEImageElement.prototype.result;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGFEImageElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEImageElement.prototype.href;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEImageElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEImageElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEImageElement.prototype.getPresentationAttribute = function(opt_name){};


/**
 * @type {string}
 */
SVGFEImageElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGFEImageElement.prototype.xmlspace;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFEDistantLightElement(){}


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDistantLightElement.prototype.azimuth;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDistantLightElement.prototype.elevation;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontFaceUriElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEDiffuseLightingElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDiffuseLightingElement.prototype.in1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDiffuseLightingElement.prototype.surfaceScale;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDiffuseLightingElement.prototype.diffuseConstant;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDiffuseLightingElement.prototype.kernelUnitLengthX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDiffuseLightingElement.prototype.kernelUnitLengthY;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDiffuseLightingElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDiffuseLightingElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDiffuseLightingElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDiffuseLightingElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDiffuseLightingElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDiffuseLightingElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEDiffuseLightingElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEDiffuseLightingElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEMorphologyElement(){}


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.prototype.SVG_MORPHOLOGY_OPERATOR_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_ERODE;


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.prototype.SVG_MORPHOLOGY_OPERATOR_ERODE;


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_DILATE;


/**
 * @const
 * @type {number}
 */
SVGFEMorphologyElement.prototype.SVG_MORPHOLOGY_OPERATOR_DILATE;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMorphologyElement.prototype.in1;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEMorphologyElement.prototype.operator;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEMorphologyElement.prototype.radiusX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEMorphologyElement.prototype.radiusY;


/**
 * @param {number=} opt_radiusX
 * @param {number=} opt_radiusY
 * @return {undefined}
 */
SVGFEMorphologyElement.prototype.setRadius = function(opt_radiusX, opt_radiusY){};


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMorphologyElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMorphologyElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMorphologyElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMorphologyElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMorphologyElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMorphologyElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEMorphologyElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEMorphologyElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGStylable}
 */
function SVGGlyphRefElement(){}


/**
 * @type {string}
 */
SVGGlyphRefElement.prototype.glyphRef;


/**
 * @type {string}
 */
SVGGlyphRefElement.prototype.format;


/**
 * @type {number}
 */
SVGGlyphRefElement.prototype.x;


/**
 * @type {number}
 */
SVGGlyphRefElement.prototype.y;


/**
 * @type {number}
 */
SVGGlyphRefElement.prototype.dx;


/**
 * @type {number}
 */
SVGGlyphRefElement.prototype.dy;


/**
 * @type {!SVGAnimatedString}
 */
SVGGlyphRefElement.prototype.href;


/**
 * @type {!SVGAnimatedString}
 */
SVGGlyphRefElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGGlyphRefElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGGlyphRefElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 */
function SVGTextContentElement(){}


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.LENGTHADJUST_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.prototype.LENGTHADJUST_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.LENGTHADJUST_SPACING;


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.prototype.LENGTHADJUST_SPACING;


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.LENGTHADJUST_SPACINGANDGLYPHS;


/**
 * @const
 * @type {number}
 */
SVGTextContentElement.prototype.LENGTHADJUST_SPACINGANDGLYPHS;


/**
 * @type {!SVGAnimatedLength}
 */
SVGTextContentElement.prototype.textLength;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGTextContentElement.prototype.lengthAdjust;


/**
 * @return {number}
 */
SVGTextContentElement.prototype.getNumberOfChars = function(){};


/**
 * @return {number}
 */
SVGTextContentElement.prototype.getComputedTextLength = function(){};


/**
 * @param {number=} opt_offset
 * @param {number=} opt_length
 * @return {number}
 */
SVGTextContentElement.prototype.getSubStringLength = function(opt_offset, opt_length){};


/**
 * @param {number=} opt_offset
 * @return {!SVGPoint}
 */
SVGTextContentElement.prototype.getStartPositionOfChar = function(opt_offset){};


/**
 * @param {number=} opt_offset
 * @return {!SVGPoint}
 */
SVGTextContentElement.prototype.getEndPositionOfChar = function(opt_offset){};


/**
 * @param {number=} opt_offset
 * @return {!SVGRect}
 */
SVGTextContentElement.prototype.getExtentOfChar = function(opt_offset){};


/**
 * @param {number=} opt_offset
 * @return {number}
 */
SVGTextContentElement.prototype.getRotationOfChar = function(opt_offset){};


/**
 * @param {!SVGPoint=} opt_point
 * @return {number}
 */
SVGTextContentElement.prototype.getCharNumAtPosition = function(opt_point){};


/**
 * @param {number=} opt_offset
 * @param {number=} opt_length
 * @return {undefined}
 */
SVGTextContentElement.prototype.selectSubString = function(opt_offset, opt_length){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGTextContentElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGStringList}
 */
SVGTextContentElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGTextContentElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGTextContentElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGTextContentElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGTextContentElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGTextContentElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGTextContentElement.prototype.getPresentationAttribute = function(opt_name){};


/**
 * @type {string}
 */
SVGTextContentElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGTextContentElement.prototype.xmlspace;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFESpotLightElement(){}


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.x;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.y;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.z;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.pointsAtX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.pointsAtY;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.pointsAtZ;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.specularExponent;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFESpotLightElement.prototype.limitingConeAngle;



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontFaceNameElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFEPointLightElement(){}


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEPointLightElement.prototype.x;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEPointLightElement.prototype.y;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEPointLightElement.prototype.z;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEDropShadowElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDropShadowElement.prototype.in1;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDropShadowElement.prototype.dx;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDropShadowElement.prototype.dy;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDropShadowElement.prototype.stdDeviationX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDropShadowElement.prototype.stdDeviationY;


/**
 * @param {number=} opt_stdDeviationX
 * @param {number=} opt_stdDeviationY
 * @return {undefined}
 */
SVGFEDropShadowElement.prototype.setStdDeviation = function(opt_stdDeviationX, opt_stdDeviationY){};


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDropShadowElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDropShadowElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDropShadowElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDropShadowElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDropShadowElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDropShadowElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEDropShadowElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEDropShadowElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFETileElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFETileElement.prototype.in1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETileElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETileElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETileElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETileElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFETileElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFETileElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFETileElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFETileElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGMissingGlyphElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEBlendElement(){}


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_NORMAL;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_NORMAL;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_MULTIPLY;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_MULTIPLY;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_SCREEN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_SCREEN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_DARKEN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_DARKEN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_LIGHTEN;


/**
 * @const
 * @type {number}
 */
SVGFEBlendElement.prototype.SVG_FEBLEND_MODE_LIGHTEN;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEBlendElement.prototype.in1;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEBlendElement.prototype.in2;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEBlendElement.prototype.mode;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEBlendElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEBlendElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEBlendElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEBlendElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEBlendElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEBlendElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEBlendElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEBlendElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGFitToViewBox}
 */
function SVGPatternElement(){}


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGPatternElement.prototype.patternUnits;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGPatternElement.prototype.patternContentUnits;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGPatternElement.prototype.patternTransform;


/**
 * @type {!SVGAnimatedLength}
 */
SVGPatternElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGPatternElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGPatternElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGPatternElement.prototype.height;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGPatternElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedRect}
 */
SVGPatternElement.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGPatternElement.prototype.preserveAspectRatio;


/**
 * @type {!SVGAnimatedString}
 */
SVGPatternElement.prototype.href;


/**
 * @type {string}
 */
SVGPatternElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGPatternElement.prototype.xmlspace;


/**
 * @type {!SVGStringList}
 */
SVGPatternElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGPatternElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGPatternElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGPatternElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGPatternElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGPatternElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGPatternElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFEMergeNodeElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMergeNodeElement.prototype.in1;



/**
 * @constructor
 * @extends {SVGComponentTransferFunctionElement}
 */
function SVGFEFuncBElement(){}



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegMovetoRel(){}


/**
 * @type {number}
 */
SVGPathSegMovetoRel.prototype.x;


/**
 * @type {number}
 */
SVGPathSegMovetoRel.prototype.y;



/**
 * @interface
 */
function SVGLocatable(){}


/**
 * @type {!SVGElement}
 */
SVGLocatable.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGLocatable.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 */
SVGLocatable.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 */
SVGLocatable.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 */
SVGLocatable.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 */
SVGLocatable.prototype.getTransformToElement = function(opt_element){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGLocatable}
 * @implements {SVGFitToViewBox}
 * @implements {SVGZoomAndPan}
 */
function SVGSVGElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGSVGElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGSVGElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGSVGElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGSVGElement.prototype.height;


/**
 * @type {string}
 */
SVGSVGElement.prototype.contentScriptType;


/**
 * @type {string}
 */
SVGSVGElement.prototype.contentStyleType;


/**
 * @type {!SVGRect}
 */
SVGSVGElement.prototype.viewport;


/**
 * @type {number}
 */
SVGSVGElement.prototype.pixelUnitToMillimeterX;


/**
 * @type {number}
 */
SVGSVGElement.prototype.pixelUnitToMillimeterY;


/**
 * @type {number}
 */
SVGSVGElement.prototype.screenPixelToMillimeterX;


/**
 * @type {number}
 */
SVGSVGElement.prototype.screenPixelToMillimeterY;


/**
 * @type {boolean}
 */
SVGSVGElement.prototype.useCurrentView;


/**
 * @type {number}
 */
SVGSVGElement.prototype.currentScale;


/**
 * @type {!SVGPoint}
 */
SVGSVGElement.prototype.currentTranslate;


/**
 * @param {number=} opt_maxWaitMilliseconds
 * @return {number}
 */
SVGSVGElement.prototype.suspendRedraw = function(opt_maxWaitMilliseconds){};


/**
 * @param {number=} opt_suspendHandleId
 * @return {undefined}
 */
SVGSVGElement.prototype.unsuspendRedraw = function(opt_suspendHandleId){};


/** */
SVGSVGElement.prototype.unsuspendRedrawAll = function(){};


/** */
SVGSVGElement.prototype.forceRedraw = function(){};


/** */
SVGSVGElement.prototype.pauseAnimations = function(){};


/** */
SVGSVGElement.prototype.unpauseAnimations = function(){};


/**
 * @return {boolean}
 */
SVGSVGElement.prototype.animationsPaused = function(){};


/**
 * @return {number}
 */
SVGSVGElement.prototype.getCurrentTime = function(){};


/**
 * @param {number=} opt_seconds
 * @return {undefined}
 */
SVGSVGElement.prototype.setCurrentTime = function(opt_seconds){};


/**
 * @param {!SVGRect=} opt_rect
 * @param {!SVGElement=} opt_referenceElement
 * @return {!NodeList<?>}
 */
SVGSVGElement.prototype.getIntersectionList = function(opt_rect, opt_referenceElement){};


/**
 * @param {!SVGRect=} opt_rect
 * @param {!SVGElement=} opt_referenceElement
 * @return {!NodeList<?>}
 */
SVGSVGElement.prototype.getEnclosureList = function(opt_rect, opt_referenceElement){};


/**
 * @param {!SVGElement=} opt_element
 * @param {!SVGRect=} opt_rect
 * @return {boolean}
 */
SVGSVGElement.prototype.checkIntersection = function(opt_element, opt_rect){};


/**
 * @param {!SVGElement=} opt_element
 * @param {!SVGRect=} opt_rect
 * @return {boolean}
 */
SVGSVGElement.prototype.checkEnclosure = function(opt_element, opt_rect){};


/** */
SVGSVGElement.prototype.deselectAll = function(){};


/**
 * @return {!SVGNumber}
 */
SVGSVGElement.prototype.createSVGNumber = function(){};


/**
 * @return {!SVGLength}
 */
SVGSVGElement.prototype.createSVGLength = function(){};


/**
 * @return {!SVGAngle}
 */
SVGSVGElement.prototype.createSVGAngle = function(){};


/**
 * @return {!SVGPoint}
 */
SVGSVGElement.prototype.createSVGPoint = function(){};


/**
 * @return {!SVGMatrix}
 */
SVGSVGElement.prototype.createSVGMatrix = function(){};


/**
 * @return {!SVGRect}
 */
SVGSVGElement.prototype.createSVGRect = function(){};


/**
 * @return {!SVGTransform}
 */
SVGSVGElement.prototype.createSVGTransform = function(){};


/**
 * @param {!SVGMatrix=} opt_matrix
 * @return {!SVGTransform}
 */
SVGSVGElement.prototype.createSVGTransformFromMatrix = function(opt_matrix){};


/**
 * @param {string=} opt_elementId
 * @return {Element}
 * @see https://developer.mozilla.org/en/docs/Web/API/SVGSVGElement
 */
SVGSVGElement.prototype.getElementById = function(opt_elementId){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGSVGElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedRect}
 */
SVGSVGElement.prototype.viewBox;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGSVGElement.prototype.preserveAspectRatio;


/**
 * @type {string}
 */
SVGSVGElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGSVGElement.prototype.xmlspace;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.prototype.SVG_ZOOMANDPAN_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.prototype.SVG_ZOOMANDPAN_DISABLE;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @const
 * @type {number}
 */
SVGSVGElement.prototype.SVG_ZOOMANDPAN_MAGNIFY;


/**
 * @type {number}
 */
SVGSVGElement.prototype.zoomAndPan;


/**
 * @type {!SVGElement}
 */
SVGSVGElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGSVGElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGSVGElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGSVGElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGSVGElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGSVGElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGSVGElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGSVGElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGSVGElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGSVGElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGSVGElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGSVGElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGSVGElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @interface
 * @extends {SVGLocatable}
 */
function SVGTransformable(){}


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGTransformable.prototype.transform;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGDefsElement(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGDefsElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGDefsElement.prototype.transform;


/**
 * @type {string}
 */
SVGDefsElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGDefsElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGDefsElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGDefsElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGDefsElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGDefsElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGDefsElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGDefsElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGDefsElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGDefsElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGDefsElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGDefsElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGDefsElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGDefsElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGDefsElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGPolygonElement(){}


/**
 * @type {!SVGPointList}
 */
SVGPolygonElement.prototype.points;


/**
 * @type {!SVGPointList}
 */
SVGPolygonElement.prototype.animatedPoints;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGPolygonElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGPolygonElement.prototype.transform;


/**
 * @type {string}
 */
SVGPolygonElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGPolygonElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGPolygonElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGPolygonElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGPolygonElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPolygonElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPolygonElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGPolygonElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGPolygonElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGPolygonElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGPolygonElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGPolygonElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGPolygonElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGPolygonElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGPolygonElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGPathElement(){}


/**
 * @type {!SVGAnimatedNumber}
 */
SVGPathElement.prototype.pathLength;


/**
 * @type {!SVGPathSegList}
 */
SVGPathElement.prototype.pathSegList;


/**
 * @type {!SVGPathSegList}
 */
SVGPathElement.prototype.normalizedPathSegList;


/**
 * @type {!SVGPathSegList}
 */
SVGPathElement.prototype.animatedPathSegList;


/**
 * @type {!SVGPathSegList}
 */
SVGPathElement.prototype.animatedNormalizedPathSegList;


/**
 * @return {number}
 */
SVGPathElement.prototype.getTotalLength = function(){};


/**
 * @param {number=} opt_distance
 * @return {!SVGPoint}
 */
SVGPathElement.prototype.getPointAtLength = function(opt_distance){};


/**
 * @param {number=} opt_distance
 * @return {number}
 */
SVGPathElement.prototype.getPathSegAtLength = function(opt_distance){};


/**
 * @return {!SVGPathSegClosePath}
 */
SVGPathElement.prototype.createSVGPathSegClosePath = function(){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegMovetoAbs}
 */
SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(opt_x, opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegMovetoRel}
 */
SVGPathElement.prototype.createSVGPathSegMovetoRel = function(opt_x, opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegLinetoAbs}
 */
SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(opt_x, opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegLinetoRel}
 */
SVGPathElement.prototype.createSVGPathSegLinetoRel = function(opt_x, opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x1
 * @param {number=} opt_y1
 * @param {number=} opt_x2
 * @param {number=} opt_y2
 * @return {!SVGPathSegCurvetoCubicAbs}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(opt_x, opt_y, opt_x1, opt_y1, opt_x2, opt_y2){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x1
 * @param {number=} opt_y1
 * @param {number=} opt_x2
 * @param {number=} opt_y2
 * @return {!SVGPathSegCurvetoCubicRel}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(opt_x, opt_y, opt_x1, opt_y1, opt_x2, opt_y2){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x1
 * @param {number=} opt_y1
 * @return {!SVGPathSegCurvetoQuadraticAbs}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(opt_x, opt_y, opt_x1, opt_y1){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x1
 * @param {number=} opt_y1
 * @return {!SVGPathSegCurvetoQuadraticRel}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(opt_x, opt_y, opt_x1, opt_y1){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_r1
 * @param {number=} opt_r2
 * @param {number=} opt_angle
 * @param {boolean=} opt_largeArcFlag
 * @param {boolean=} opt_sweepFlag
 * @return {!SVGPathSegArcAbs}
 */
SVGPathElement.prototype.createSVGPathSegArcAbs = function(opt_x, opt_y, opt_r1, opt_r2, opt_angle, opt_largeArcFlag, opt_sweepFlag){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_r1
 * @param {number=} opt_r2
 * @param {number=} opt_angle
 * @param {boolean=} opt_largeArcFlag
 * @param {boolean=} opt_sweepFlag
 * @return {!SVGPathSegArcRel}
 */
SVGPathElement.prototype.createSVGPathSegArcRel = function(opt_x, opt_y, opt_r1, opt_r2, opt_angle, opt_largeArcFlag, opt_sweepFlag){};


/**
 * @param {number=} opt_x
 * @return {!SVGPathSegLinetoHorizontalAbs}
 */
SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(opt_x){};


/**
 * @param {number=} opt_x
 * @return {!SVGPathSegLinetoHorizontalRel}
 */
SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(opt_x){};


/**
 * @param {number=} opt_y
 * @return {!SVGPathSegLinetoVerticalAbs}
 */
SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(opt_y){};


/**
 * @param {number=} opt_y
 * @return {!SVGPathSegLinetoVerticalRel}
 */
SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x2
 * @param {number=} opt_y2
 * @return {!SVGPathSegCurvetoCubicSmoothAbs}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(opt_x, opt_y, opt_x2, opt_y2){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_x2
 * @param {number=} opt_y2
 * @return {!SVGPathSegCurvetoCubicSmoothRel}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(opt_x, opt_y, opt_x2, opt_y2){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegCurvetoQuadraticSmoothAbs}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(opt_x, opt_y){};


/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!SVGPathSegCurvetoQuadraticSmoothRel}
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(opt_x, opt_y){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGPathElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGPathElement.prototype.transform;


/**
 * @type {string}
 */
SVGPathElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGPathElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGPathElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGPathElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGPathElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPathElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPathElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGPathElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGPathElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGPathElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGPathElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGPathElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGPathElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGPathElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGPathElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGCircleElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGCircleElement.prototype.cx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGCircleElement.prototype.cy;


/**
 * @type {!SVGAnimatedLength}
 */
SVGCircleElement.prototype.r;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGCircleElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGCircleElement.prototype.transform;


/**
 * @type {string}
 */
SVGCircleElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGCircleElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGCircleElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGCircleElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGCircleElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGCircleElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGCircleElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGCircleElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGCircleElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGCircleElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGCircleElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGCircleElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGCircleElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGCircleElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGCircleElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGUseElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGUseElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGUseElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGUseElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGUseElement.prototype.height;


/**
 * @type {!SVGElementInstance}
 */
SVGUseElement.prototype.instanceRoot;


/**
 * @type {!SVGElementInstance}
 */
SVGUseElement.prototype.animatedInstanceRoot;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGUseElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGElement}
 */
SVGUseElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGUseElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGUseElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGUseElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGUseElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGUseElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGUseElement.prototype.transform;


/**
 * @type {!SVGAnimatedString}
 */
SVGUseElement.prototype.href;


/**
 * @type {string}
 */
SVGUseElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGUseElement.prototype.xmlspace;


/**
 * @type {!SVGStringList}
 */
SVGUseElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGUseElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGUseElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGUseElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGUseElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGUseElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGUseElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGPolylineElement(){}


/**
 * @type {!SVGPointList}
 */
SVGPolylineElement.prototype.points;


/**
 * @type {!SVGPointList}
 */
SVGPolylineElement.prototype.animatedPoints;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGPolylineElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGPolylineElement.prototype.transform;


/**
 * @type {string}
 */
SVGPolylineElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGPolylineElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGPolylineElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGPolylineElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGPolylineElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPolylineElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGPolylineElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGPolylineElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGPolylineElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGPolylineElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGPolylineElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGPolylineElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGPolylineElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGPolylineElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGPolylineElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGGElement(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGGElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGGElement.prototype.transform;


/**
 * @type {string}
 */
SVGGElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGGElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGGElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGGElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGGElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGGElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGGElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGGElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGGElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGGElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGGElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGGElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGGElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGGElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGGElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGSwitchElement(){}


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGSwitchElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGSwitchElement.prototype.transform;


/**
 * @type {string}
 */
SVGSwitchElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGSwitchElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGSwitchElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGSwitchElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGSwitchElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGSwitchElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGSwitchElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGSwitchElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGSwitchElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGSwitchElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGSwitchElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGSwitchElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGSwitchElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGSwitchElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGSwitchElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGImageElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGImageElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGImageElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGImageElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGImageElement.prototype.height;


/**
 * @type {!SVGAnimatedPreserveAspectRatio}
 */
SVGImageElement.prototype.preserveAspectRatio;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGImageElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGElement}
 */
SVGImageElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGImageElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGImageElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGImageElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGImageElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGImageElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGImageElement.prototype.transform;


/**
 * @type {!SVGAnimatedString}
 */
SVGImageElement.prototype.href;


/**
 * @type {string}
 */
SVGImageElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGImageElement.prototype.xmlspace;


/**
 * @type {!SVGStringList}
 */
SVGImageElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGImageElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGImageElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGImageElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGImageElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGImageElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGImageElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGRectElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.height;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.rx;


/**
 * @type {!SVGAnimatedLength}
 */
SVGRectElement.prototype.ry;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGRectElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGRectElement.prototype.transform;


/**
 * @type {string}
 */
SVGRectElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGRectElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGRectElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGRectElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGRectElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGRectElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGRectElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGRectElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGRectElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGRectElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGRectElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGRectElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGRectElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGRectElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGRectElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGAElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGAElement.prototype.target;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGAElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGElement}
 */
SVGAElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGAElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGAElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGAElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGAElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGAElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGAElement.prototype.transform;


/**
 * @type {!SVGAnimatedString}
 */
SVGAElement.prototype.href;


/**
 * @type {string}
 */
SVGAElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGAElement.prototype.xmlspace;


/**
 * @type {!SVGStringList}
 */
SVGAElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGAElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGAElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGAElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGAElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGAElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGAElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 */
function SVGAnimatedPreserveAspectRatio(){}


/**
 * @type {!SVGPreserveAspectRatio}
 */
SVGAnimatedPreserveAspectRatio.prototype.baseVal;


/**
 * @type {!SVGPreserveAspectRatio}
 */
SVGAnimatedPreserveAspectRatio.prototype.animVal;



/**
 * @constructor
 */
function SVGElementInstanceList(){}


/**
 * @type {number}
 */
SVGElementInstanceList.prototype.length;


/**
 * @param {number=} opt_index
 * @return {!SVGElementInstance}
 */
SVGElementInstanceList.prototype.item = function(opt_index){};



/**
 * @constructor
 * @extends {Element}
 */
function SVGElement(){}


/**
 * @type {string}
 */
SVGElement.prototype.id;


/**
 * @type {string}
 */
SVGElement.prototype.xmlbase;


/**
 * @type {!SVGSVGElement}
 */
SVGElement.prototype.ownerSVGElement;


/**
 * @type {!SVGElement}
 */
SVGElement.prototype.viewportElement;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFETurbulenceElement(){}


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_TURBULENCE_TYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_FRACTALNOISE;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_TURBULENCE_TYPE_FRACTALNOISE;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_TURBULENCE;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_TURBULENCE_TYPE_TURBULENCE;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_STITCHTYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_STITCH;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_STITCHTYPE_STITCH;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_NOSTITCH;


/**
 * @const
 * @type {number}
 */
SVGFETurbulenceElement.prototype.SVG_STITCHTYPE_NOSTITCH;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFETurbulenceElement.prototype.baseFrequencyX;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFETurbulenceElement.prototype.baseFrequencyY;


/**
 * @type {!SVGAnimatedInteger}
 */
SVGFETurbulenceElement.prototype.numOctaves;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFETurbulenceElement.prototype.seed;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFETurbulenceElement.prototype.stitchTiles;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFETurbulenceElement.prototype.type;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETurbulenceElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETurbulenceElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETurbulenceElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFETurbulenceElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFETurbulenceElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFETurbulenceElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFETurbulenceElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFETurbulenceElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGPathSeg}
 */
function SVGPathSegArcAbs(){}


/**
 * @type {number}
 */
SVGPathSegArcAbs.prototype.x;


/**
 * @type {number}
 */
SVGPathSegArcAbs.prototype.y;


/**
 * @type {number}
 */
SVGPathSegArcAbs.prototype.r1;


/**
 * @type {number}
 */
SVGPathSegArcAbs.prototype.r2;


/**
 * @type {number}
 */
SVGPathSegArcAbs.prototype.angle;


/**
 * @type {boolean}
 */
SVGPathSegArcAbs.prototype.largeArcFlag;


/**
 * @type {boolean}
 */
SVGPathSegArcAbs.prototype.sweepFlag;



/**
 * @constructor
 */
function SVGAnimatedBoolean(){}


/**
 * @type {boolean}
 */
SVGAnimatedBoolean.prototype.baseVal;


/**
 * @type {boolean}
 */
SVGAnimatedBoolean.prototype.animVal;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGLangSpace}
 */
function SVGStyleElement(){}


/**
 * @type {boolean}
 */
SVGStyleElement.prototype.disabled;


/**
 * @type {string}
 */
SVGStyleElement.prototype.type;


/**
 * @type {string}
 */
SVGStyleElement.prototype.media;


/**
 * @type {string}
 */
SVGStyleElement.prototype.title;


/**
 * @type {string}
 */
SVGStyleElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGStyleElement.prototype.xmlspace;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGClipPathElement(){}


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGClipPathElement.prototype.clipPathUnits;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGClipPathElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGClipPathElement.prototype.transform;


/**
 * @type {string}
 */
SVGClipPathElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGClipPathElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGClipPathElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGClipPathElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGClipPathElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGClipPathElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGClipPathElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGClipPathElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGClipPathElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGClipPathElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGClipPathElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGClipPathElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGClipPathElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGClipPathElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGClipPathElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @interface
 */
function ElementTimeControl(){}


/**
 * @return {undefined}
 */
ElementTimeControl.prototype.beginElement = function(){};


/**
 * @param {number=} opt_offset
 * @return {undefined}
 */
ElementTimeControl.prototype.beginElementAt = function(opt_offset){};


/**
 * @return {undefined}
 */
ElementTimeControl.prototype.endElement = function(){};


/**
 * @param {number=} opt_offset
 * @return {undefined}
 */
ElementTimeControl.prototype.endElementAt = function(opt_offset){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGExternalResourcesRequired}
 * @implements {ElementTimeControl}
 */
function SVGAnimationElement(){}


/**
 * @type {!SVGElement}
 */
SVGAnimationElement.prototype.targetElement;


/**
 * @return {number}
 */
SVGAnimationElement.prototype.getStartTime = function(){};


/**
 * @return {number}
 */
SVGAnimationElement.prototype.getCurrentTime = function(){};


/**
 * @return {number}
 */
SVGAnimationElement.prototype.getSimpleDuration = function(){};


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGAnimationElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGStringList}
 */
SVGAnimationElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGAnimationElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGAnimationElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGAnimationElement.prototype.hasExtension = function(opt_extension){};


/**
 * @override
 * @return {undefined}
 */
SVGAnimationElement.prototype.beginElement = function(){};


/**
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
SVGAnimationElement.prototype.beginElementAt = function(opt_offset){};


/**
 * @override
 * @return {undefined}
 */
SVGAnimationElement.prototype.endElement = function(){};


/**
 * @param {number=} opt_offset
 * @override
 * @return {undefined}
 */
SVGAnimationElement.prototype.endElementAt = function(opt_offset){};



/**
 * @constructor
 * @extends {SVGAnimationElement}
 */
function SVGAnimateMotionElement(){}



/**
 * @constructor
 * @extends {SVGAnimationElement}
 */
function SVGAnimateElement(){}



/**
 * @constructor
 * @extends {SVGAnimationElement}
 */
function SVGAnimateColorElement(){}



/**
 * @constructor
 * @extends {SVGAnimationElement}
 */
function SVGAnimateTransformElement(){}



/**
 * @constructor
 * @extends {SVGAnimationElement}
 */
function SVGSetElement(){}



/**
 * @constructor
 */
function SVGAngle(){}


/**
 * @const
 * @type {number}
 */
SVGAngle.SVG_ANGLETYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGAngle.prototype.SVG_ANGLETYPE_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGAngle.SVG_ANGLETYPE_UNSPECIFIED;


/**
 * @const
 * @type {number}
 */
SVGAngle.prototype.SVG_ANGLETYPE_UNSPECIFIED;


/**
 * @const
 * @type {number}
 */
SVGAngle.SVG_ANGLETYPE_DEG;


/**
 * @const
 * @type {number}
 */
SVGAngle.prototype.SVG_ANGLETYPE_DEG;


/**
 * @const
 * @type {number}
 */
SVGAngle.SVG_ANGLETYPE_RAD;


/**
 * @const
 * @type {number}
 */
SVGAngle.prototype.SVG_ANGLETYPE_RAD;


/**
 * @const
 * @type {number}
 */
SVGAngle.SVG_ANGLETYPE_GRAD;


/**
 * @const
 * @type {number}
 */
SVGAngle.prototype.SVG_ANGLETYPE_GRAD;


/**
 * @type {number}
 */
SVGAngle.prototype.unitType;


/**
 * @type {number}
 */
SVGAngle.prototype.value;


/**
 * @type {number}
 */
SVGAngle.prototype.valueInSpecifiedUnits;


/**
 * @type {string}
 */
SVGAngle.prototype.valueAsString;


/**
 * @param {number} unitType
 * @param {number} valueInSpecifiedUnits
 * @return {undefined}
 */
SVGAngle.prototype.newValueSpecifiedUnits = function(unitType, valueInSpecifiedUnits){};


/**
 * @param {number} unitType
 * @return {undefined}
 */
SVGAngle.prototype.convertToSpecifiedUnits = function(unitType){};



/**
 * @constructor
 * @extends {SVGTextPositioningElement}
 * @implements {SVGTransformable}
 */
function SVGTextElement(){}


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGTextElement.prototype.transform;


/**
 * @type {!SVGElement}
 */
SVGTextElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGTextElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGTextElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGTextElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGTextElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGTextElement.prototype.getTransformToElement = function(opt_element){};



/**
 * @constructor
 * @extends {SVGElement}
 */
function SVGFontFaceElement(){}



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGLineElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGLineElement.prototype.x1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLineElement.prototype.y1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLineElement.prototype.x2;


/**
 * @type {!SVGAnimatedLength}
 */
SVGLineElement.prototype.y2;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGLineElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGLineElement.prototype.transform;


/**
 * @type {string}
 */
SVGLineElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGLineElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGLineElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGLineElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGLineElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGLineElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGLineElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGLineElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGLineElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGLineElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGLineElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGLineElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGLineElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGLineElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGLineElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEComponentTransferElement(){}


/**
 * @type {!SVGAnimatedString}
 */
SVGFEComponentTransferElement.prototype.in1;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEComponentTransferElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEComponentTransferElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEComponentTransferElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEComponentTransferElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEComponentTransferElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEComponentTransferElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEComponentTransferElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEComponentTransferElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEDisplacementMapElement(){}


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.prototype.SVG_CHANNEL_UNKNOWN;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_R;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.prototype.SVG_CHANNEL_R;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_G;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.prototype.SVG_CHANNEL_G;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_B;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.prototype.SVG_CHANNEL_B;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_A;


/**
 * @const
 * @type {number}
 */
SVGFEDisplacementMapElement.prototype.SVG_CHANNEL_A;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDisplacementMapElement.prototype.in1;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDisplacementMapElement.prototype.in2;


/**
 * @type {!SVGAnimatedNumber}
 */
SVGFEDisplacementMapElement.prototype.scale;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEDisplacementMapElement.prototype.xChannelSelector;


/**
 * @type {!SVGAnimatedEnumeration}
 */
SVGFEDisplacementMapElement.prototype.yChannelSelector;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDisplacementMapElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDisplacementMapElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDisplacementMapElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEDisplacementMapElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDisplacementMapElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEDisplacementMapElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEDisplacementMapElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEDisplacementMapElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 */
function SVGAnimatedEnumeration(){}


/**
 * @type {number}
 */
SVGAnimatedEnumeration.prototype.baseVal;


/**
 * @type {number}
 */
SVGAnimatedEnumeration.prototype.animVal;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGFilterPrimitiveStandardAttributes}
 */
function SVGFEMergeElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMergeElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMergeElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMergeElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGFEMergeElement.prototype.height;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMergeElement.prototype.result;


/**
 * @type {!SVGAnimatedString}
 */
SVGFEMergeElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGFEMergeElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGFEMergeElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGTests}
 * @implements {SVGLangSpace}
 * @implements {SVGExternalResourcesRequired}
 * @implements {SVGStylable}
 * @implements {SVGTransformable}
 */
function SVGForeignObjectElement(){}


/**
 * @type {!SVGAnimatedLength}
 */
SVGForeignObjectElement.prototype.x;


/**
 * @type {!SVGAnimatedLength}
 */
SVGForeignObjectElement.prototype.y;


/**
 * @type {!SVGAnimatedLength}
 */
SVGForeignObjectElement.prototype.width;


/**
 * @type {!SVGAnimatedLength}
 */
SVGForeignObjectElement.prototype.height;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGForeignObjectElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedTransformList}
 */
SVGForeignObjectElement.prototype.transform;


/**
 * @type {string}
 */
SVGForeignObjectElement.prototype.xmllang;


/**
 * @type {string}
 */
SVGForeignObjectElement.prototype.xmlspace;


/**
 * @type {!SVGElement}
 */
SVGForeignObjectElement.prototype.nearestViewportElement;


/**
 * @type {!SVGElement}
 */
SVGForeignObjectElement.prototype.farthestViewportElement;


/**
 * @return {!SVGRect}
 * @override
 */
SVGForeignObjectElement.prototype.getBBox = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGForeignObjectElement.prototype.getCTM = function(){};


/**
 * @return {!SVGMatrix}
 * @override
 */
SVGForeignObjectElement.prototype.getScreenCTM = function(){};


/**
 * @param {!SVGElement=} opt_element
 * @return {!SVGMatrix}
 * @override
 */
SVGForeignObjectElement.prototype.getTransformToElement = function(opt_element){};


/**
 * @type {!SVGStringList}
 */
SVGForeignObjectElement.prototype.requiredFeatures;


/**
 * @type {!SVGStringList}
 */
SVGForeignObjectElement.prototype.requiredExtensions;


/**
 * @type {!SVGStringList}
 */
SVGForeignObjectElement.prototype.systemLanguage;


/**
 * @param {string=} opt_extension
 * @return {boolean}
 * @override
 */
SVGForeignObjectElement.prototype.hasExtension = function(opt_extension){};


/**
 * @type {!SVGAnimatedString}
 */
SVGForeignObjectElement.prototype.className;


/**
 * @type {!Array<string>|!CSSStyleDeclaration}
 */
SVGForeignObjectElement.prototype.style;


/**
 * @param {string=} opt_name
 * @return {!CSSValue}
 * @override
 */
SVGForeignObjectElement.prototype.getPresentationAttribute = function(opt_name){};



/**
 * @constructor
 */
function SVGAnimatedLength(){}


/**
 * @type {!SVGLength}
 */
SVGAnimatedLength.prototype.baseVal;


/**
 * @type {!SVGLength}
 */
SVGAnimatedLength.prototype.animVal;



/**
 * @constructor
 * @extends {SVGElement}
 * @implements {SVGURIReference}
 * @implements {SVGExternalResourcesRequired}
 */
function SVGScriptElement(){}


/**
 * @type {string}
 */
SVGScriptElement.prototype.type;


/**
 * @type {!SVGAnimatedBoolean}
 */
SVGScriptElement.prototype.externalResourcesRequired;


/**
 * @type {!SVGAnimatedString}
 */
SVGScriptElement.prototype.href;



/**
 * @constructor
 */
function SVGAnimatedInteger(){}


/**
 * @type {number}
 */
SVGAnimatedInteger.prototype.baseVal;


/**
 * @type {number}
 */
SVGAnimatedInteger.prototype.animVal;
