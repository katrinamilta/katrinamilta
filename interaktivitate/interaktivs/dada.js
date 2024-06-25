(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dada_atlas_1", frames: [[0,0,696,863],[463,865,320,422],[0,1603,696,438],[463,1289,219,220],[0,865,461,736]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Backgroundcopy = function() {
	this.initialize(ss["dada_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["dada_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["dada_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["dada_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.initialize(ss["dada_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,400,527.5), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer3();
	this.instance.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,273.8,275), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["dada_atlas_1"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1.25,0,0,1.25,-435,-273.7)).s().p("EhD9AqxIAAwuQGzCfINhmIDIigIBQgUQBHg8BJg3QChh7CHh6IAAkEQhcglg7hGQg2hBgihFIgpAAQgdAAgdgEQgWgGgSgLQgLgJgKgJIh5AAIg7gpIhQAAQoOAAnvBsMAAAg14MCH7AAAMAAAA8fQw4lAxyAKIhQg8IjxAAIgTg9Ih4B5QgJCDhLBlQgfArgtAtIgUDcIAnAoIAoB4QAoAUArAJQBCALBIAAIBQA8IErAUQH7C/KQgnQIGgkHyiBIAARSg")
	}.bind(this);
	this.shape.setTransform(435,273.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,870,547.5), null);


(lib.uzvalks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// uzvalks
	this.instance = new lib.Symbol1();
	this.instance.setTransform(435,273.8,1,1,0,0,0,435,273.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:487.65,y:288.8},0).wait(1).to({x:540.3,y:303.85},0).wait(1).to({x:566.9,y:313.9},0).wait(1).to({x:593.55,y:323.95},0).wait(1).to({x:620.15,y:334.05},0).wait(1).to({x:658.8,y:312.6},0).wait(1).to({x:697.4,y:291.2},0).wait(1).to({x:746.95,y:318.7},0).wait(1).to({x:796.5,y:346.15},0).wait(1).to({x:842.65,y:315.05},0).wait(1).to({x:888.75,y:283.95},0).wait(1).to({x:914.85,y:295.65},0).wait(1).to({x:940.95,y:307.35},0).wait(1).to({x:967,y:279.1},0).wait(1).to({x:993.1,y:250.85},0).wait(1).to({x:1025.45,y:249.4},0).wait(1).to({x:1057.8,y:247.95},0).wait(1).to({x:1090.1,y:246.5},0).wait(1).to({x:1120.5,y:277.5},0).wait(1).to({x:1150.85,y:308.5},0).wait(1).to({x:1260.95,y:506.95},0).wait(1).to({x:1371,y:705.35},0).wait(1).to({x:1481.1,y:903.75},0).wait(1).to({x:1432.9,y:896.3},0).wait(1).to({x:1384.75,y:888.9},0).wait(1).to({x:1336.55,y:881.45},0).wait(1).to({x:1288.4,y:874},0).wait(1).to({x:1240.25,y:866.55},0).wait(1).to({x:1192.05,y:859.1},0).wait(1).to({x:1136.6,y:866.6},0).wait(1).to({x:1081.15,y:874.1},0).wait(1).to({x:1025.7,y:881.6},0).wait(1).to({x:970.3,y:889.1},0).wait(1).to({x:914.85,y:896.6},0).wait(1).to({x:859.4,y:904.1},0).wait(1).to({x:788.65,y:900.25},0).wait(1).to({x:717.95,y:896.4},0).wait(1).to({x:647.2,y:892.55},0).wait(1).to({x:576.45,y:888.7},0).wait(1).to({x:505.75,y:884.9},0).wait(1).to({x:435,y:881.05},0).wait(1).to({x:349.05,y:875.95},0).wait(1).to({x:263,y:870.9},0).wait(1).to({x:177,y:865.8},0).wait(1).to({x:57.5,y:826.35},0).wait(1).to({x:-62,y:786.9},0).wait(1).to({x:-181.5,y:747.4},0).wait(1).to({x:-172.8,y:707.95},0).wait(1).to({x:-164.1,y:668.45},0).wait(1).to({x:-155.4,y:629},0).wait(1).to({x:-179.15,y:555.55},0).wait(1).to({x:-202.9,y:482.05},0).wait(1).to({x:-226.65,y:408.6},0).wait(1).to({x:-109.7,y:367.45},0).wait(1).to({x:7.25,y:326.3},0).wait(1).to({x:124.2,y:285.2},0).wait(1).to({x:321.85,y:341.4},0).wait(1).to({x:378.45,y:307.6},0).wait(1).to({x:435,y:273.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-661.6,-27.3,2577.7,1205.1);


(lib.galva = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(200,263.8,1,1,0,0,0,200,263.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.6665,x:188.2,y:256.1},0).wait(1).to({rotation:-3.3331,x:176.45,y:248.25},0).wait(1).to({rotation:-4.9996,x:164.7,y:240.5},0).wait(1).to({rotation:-6.6662,x:152.9,y:232.7},0).wait(1).to({rotation:-8.3327,x:141.15,y:224.9},0).wait(1).to({rotation:-9.9993,x:129.35,y:217.15},0).wait(1).to({rotation:-11.6658,x:117.6,y:209.35},0).wait(1).to({rotation:-13.3324,x:105.8,y:201.65},0).wait(1).to({rotation:-14.9989,x:94.05,y:193.8},0).wait(1).to({rotation:-17.9987,x:88.55,y:189.4},0).wait(1).to({rotation:-20.9986,x:83.1,y:185},0).wait(1).to({rotation:-23.9984,x:77.65,y:180.55},0).wait(1).to({rotation:-26.9983,x:72.15,y:176.15},0).wait(1).to({rotation:-29.9981,x:66.7,y:171.75},0).wait(1).to({rotation:-32.998,x:61.25,y:167.35},0).wait(1).to({rotation:-35.9978,x:55.8,y:162.9},0).wait(1).to({rotation:-38.9977,x:50.35,y:158.55},0).wait(1).to({rotation:-41.9975,x:44.85,y:154.15},0).wait(1).to({rotation:-44.9974,x:39.4,y:149.75},0).wait(1).to({rotation:-49.4893,x:33.9,y:145.3},0).wait(1).to({rotation:-53.9811,x:28.45,y:140.95},0).wait(1).to({rotation:-58.473,x:23,y:136.5},0).wait(1).to({rotation:-62.9648,x:17.5,y:132.1},0).wait(1).to({rotation:-67.4567,x:12.1,y:127.75},0).wait(1).to({rotation:-71.2066,x:-2.4,y:114.45},0).wait(1).to({rotation:-74.9566,x:-16.95,y:101.15},0).wait(1).to({rotation:-78.7065,x:-31.45,y:87.9},0).wait(1).to({rotation:-82.4564,x:-45.95,y:74.7},0).wait(1).to({rotation:-86.2064,x:-60.45,y:61.4},0).wait(1).to({rotation:-89.9563,x:-74.95,y:48.15},0).wait(1).to({rotation:-93.7063,x:-89.45,y:34.85},0).wait(1).to({rotation:-97.4562,x:-103.95,y:21.6},0).wait(1).to({rotation:-101.206,x:-109.15,y:19.95},0).wait(1).to({rotation:-104.9559,x:-114.4,y:18.25},0).wait(1).to({rotation:-108.7057,x:-119.65,y:16.5},0).wait(1).to({rotation:-112.4556,x:-124.85,y:14.85},0).wait(1).to({rotation:-116.2054,x:-130.05,y:13.15},0).wait(1).to({rotation:-119.9553,x:-135.3,y:11.45},0).wait(1).to({rotation:-123.7051,x:-140.55,y:9.7},0).wait(1).to({rotation:-127.455,x:-145.75,y:8.1},0).wait(1).to({rotation:-132.448,x:-151.05,y:6.35},0).wait(1).to({rotation:-137.441,x:-156.25,y:4.7},0).wait(1).to({rotation:-142.434,x:-161.5,y:2.95},0).wait(1).to({rotation:-147.427,x:-166.75,y:1.3},0).wait(1).to({rotation:-152.42,x:-171.9,y:-0.4},0).wait(1).to({rotation:-84.3935,x:-242.95,y:-58.4},0).wait(1).to({rotation:-16.367,x:-314,y:-116.3},0).wait(1).to({rotation:51.6595,x:-385.1,y:-174.3},0).wait(1).to({rotation:119.686,x:-456.1,y:-232.35},0).wait(1).to({rotation:107.1861,x:-414.1,y:-180.35},0).wait(1).to({rotation:94.6862,x:-372.1,y:-128.3},0).wait(1).to({rotation:82.1864,x:-330.1,y:-76.3},0).wait(1).to({rotation:69.6865,x:-288.1,y:-24.25},0).wait(1).to({rotation:57.1866,x:-246.05,y:27.75},0).wait(1).to({rotation:44.6867,x:-204.05,y:79.75},0).wait(1).to({rotation:36.0108,x:-148,y:118.3},0).wait(1).to({rotation:27.335,x:-92.05,y:156.8},0).wait(1).to({rotation:18.6591,x:-35.95,y:195.35},0).wait(1).to({rotation:9.9833,x:20.05,y:233.8},0).wait(1).to({rotation:2.4837,x:72.05,y:255.8},0).wait(1).to({rotation:0,x:200,y:263.8},0).wait(2).to({regX:198.2,regY:262.2,rotation:-1.6657,x:188.25,y:256},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-784.3,-536.7,1184.3,1064.9);


(lib.dama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(136.8,137.5,1,1,0,0,0,136.8,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:136.9,scaleX:0.931,x:136.85},0).wait(1).to({scaleX:0.8621},0).wait(1).to({scaleX:0.7931},0).wait(1).to({scaleX:0.7241,x:136.9},0).wait(1).to({scaleX:0.6552,x:136.85},0).wait(1).to({scaleX:0.5862},0).wait(1).to({scaleX:0.5172},0).wait(1).to({scaleX:0.4483},0).wait(1).to({scaleX:0.3793},0).wait(1).to({scaleX:0.3103},0).wait(1).to({scaleX:0.2414},0).wait(1).to({scaleX:0.1724},0).wait(1).to({scaleX:0.1034,x:136.8},0).wait(1).to({scaleX:0.0345},0).wait(1).to({skewY:180,x:136.85},0).wait(1).to({scaleX:0.1034},0).wait(1).to({scaleX:0.1724,x:136.8},0).wait(1).to({scaleX:0.2414},0).wait(1).to({scaleX:0.3103},0).wait(1).to({scaleX:0.3793},0).wait(1).to({scaleX:0.4483},0).wait(1).to({scaleX:0.5172},0).wait(1).to({scaleX:0.5862},0).wait(1).to({scaleX:0.6552},0).wait(1).to({scaleX:0.7241,x:136.75},0).wait(1).to({scaleX:0.7931,x:136.8},0).wait(1).to({scaleX:0.8621},0).wait(1).to({scaleX:0.931},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.9333},0).wait(1).to({scaleX:0.8667},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.7333},0).wait(1).to({scaleX:0.6667},0).wait(1).to({scaleX:0.6},0).wait(1).to({scaleX:0.5333},0).wait(1).to({scaleX:0.4667},0).wait(1).to({scaleX:0.4},0).wait(1).to({scaleX:0.3333},0).wait(1).to({scaleX:0.2667},0).wait(1).to({scaleX:0.2},0).wait(1).to({scaleX:0.1333},0).wait(1).to({scaleX:0.0667},0).wait(1).to({scaleX:0,skewY:0,x:64},0).wait(1).to({scaleX:0.0667,x:136.85},0).wait(1).to({scaleX:0.1333},0).wait(1).to({scaleX:0.2},0).wait(1).to({scaleX:0.2667},0).wait(1).to({scaleX:0.3333},0).wait(1).to({scaleX:0.4},0).wait(1).to({scaleX:0.4667},0).wait(1).to({scaleX:0.5333},0).wait(1).to({scaleX:0.6},0).wait(1).to({scaleX:0.6667},0).wait(1).to({scaleX:0.7333},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.8667},0).wait(1).to({scaleX:0.9333},0).wait(1).to({scaleX:1,x:136.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.8,275);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.uzvalks.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.uzvalks.play();
		}
		this.galva.addEventListener("click", fl_ClickToGoToAndPlayFromFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame2()
		{
			this.galva.play();
		}
		this.dama.addEventListener("click", fl_ClickToGoToAndPlayFromFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame3()
		{
			this.dama.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dama
	this.dama = new lib.dama();
	this.dama.name = "dama";
	this.dama.setTransform(731.8,452.5,1,1,0,0,0,136.8,137.5);

	this.timeline.addTween(cjs.Tween.get(this.dama).wait(1));

	// galva
	this.galva = new lib.galva();
	this.galva.name = "galva";
	this.galva.setTransform(397,355.8,1,1,0,0,0,200,263.8);

	this.timeline.addTween(cjs.Tween.get(this.galva).wait(1));

	// uzvalks
	this.uzvalks = new lib.uzvalks();
	this.uzvalks.name = "uzvalks";
	this.uzvalks.setTransform(435,805.8,1,1,0,0,0,435,273.8);

	this.timeline.addTween(cjs.Tween.get(this.uzvalks).wait(1));

	// Layer_4_png
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["dada_atlas_1"],4);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1.25,0,0,1.25,-288.1,-460)).s().p("EgtABH4MAAAhPRQBcBFCDAWQDMAgCvhfQA0CRCLBYQCMBYCagQQBRgJB7gzQADA2AIAsQAWBtBDBeQBEBeBiA3QBiA2B0AIQB0AGBngqQBogrBLhZQA+hHAdhUIAbgOQCHhIBDh/QAmhIAUhkQANg9ANh5IAnlvQAFgtAFgYQAIgmAQgbQAQgdAlgiIA+g5QA3g7AbhYQAXhOgBhcQgBhHgQhiQgVhxgJg5QgRhsgNjHQgPjWgMhdQgWiqgviEQg3idhchuQhnh8iSg5Qicg8iPAoQizAzhkC6QhfCwAaDFQAMBcgGAvQgKBNg2AVQgbAMgngGQgKgCg5gOQiAgeiDAnQiDAohaBgQhribjJgqQjKgpigBkQhoBChQB7Qg+Bfg6CTIgEAMMAAAgpXMBaBAAAIAAdTQgegMgfgIQh8geiAAnQiBAnhWBeQgXiSgkhjQgwiBhQhSQhohridgbQicgbiHBCQiGBAhOCKQhOCJANCVQAFA5AWBRIAlCJQAnCdAID0IADCqQglAwgYA5QglBZgBBoQgCBhAcBlQAGAWAdBbQAXBFAIAtQAGAjAGBQQAGBLAIAoQAbB8BhBgQBGBGBXAkQBABDBYApQBmAxBxAEQBvAEBsgpQBqgmBWhLQCTh/BUjgQAZhJAPgkQAYg9AegnQAKgNARgRMAAABZXg")
	}.bind(this);
	this.shape.setTransform(305.125,619);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["dada_atlas_1"],0);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(1.25,0,0,1.25,-435,-539.4)).s().p("EhD9BUSMAAAiojMCH7AAAMAAACojg")
	}.bind(this);
	this.shape_1.setTransform(435,539.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(435,539.5,435,540);
// library properties:
lib.properties = {
	id: '84549DFB9E81B440B0CB9B6B1C24CDB5',
	width: 870,
	height: 1079,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dada_atlas_1.png", id:"dada_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['84549DFB9E81B440B0CB9B6B1C24CDB5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;