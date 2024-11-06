(function(window) {
	var Piece = function(canvas, config)
	{
		this.initialize(canvas, config);
	}
	var p = Piece.prototype = new BasePiece();
	//
	p.initialize = function(canvas, config)
	{
		BasePiece.prototype.initialize.call(this, canvas, config);
		this.initInteraction();
		window.onkeydown = this.onKeyDown.bind(this);
	}

	p.onKeyDown = function(e)
	{
		var keycode = e.which;
		//left right
		if (keycode == 37) this.turndir = -1; 
		if (keycode == 39) this.turndir = 1;
		//up down
		if (keycode == 38) this.acceleration = 1;
		if (keycode == 40) this.acceleration = -1;
	}
	
	p.onKeyUp = function(e)
	{
		BasePiece.prototype.onKeyUp.call(this, e);
		var keycode = e.which;
		if (keycode == 37 || keycode == 39) this.turndir = 0;
		if (keycode == 38 || keycode == 40) this.acceleration = 0;
		//
		if (!this.config.debug) return;
		var c = String.fromCharCode(e.which);
		if (c=="R") this.reset();
		else if (c=="C") this.colorOvals = this.colorOvals == "#000" ? "#00F" : "#000";
	}
		
	
	/*********************************
	 *		    INTERACTION
	 ********************************/
	
	p.initInteraction = function()
	{
		this.stage.addEventListener("stagemousedown", this.handleMouseDown.bind(this));
		this.stage.addEventListener("stagemousemove", this.handleMouseMove.bind(this));
		this.stage.addEventListener("stagemouseup", this.handleMouseUp.bind(this));
	}
	p.handleMouseDown = function(e)
	{
		if (this.pointerID) return;
		this.pointerID = e.pointerID;
		this.mouseIsDown = true;
		this.startX = this.mouseX = e.stageX;
	}
	p.handleMouseMove = function(e)
	{
		if (e.pointerID!=this.pointerID) return;
		this.mouseX = e.stageX;
	}
	p.handleMouseUp = function(e)
	{
		if (e.pointerID!=this.pointerID) return;
		this.pointerID = null;
		this.mouseIsDown = false;
		this.acceleration = 0;
		this.turndir = 0;
	}
	

	 
	/*********************************
	 *			    FLOW
	 ********************************/
	
	p.setSize = function(w,h,dpr)
	{
		this.dpr = dpr;
		w = this.width = Math.floor(w*dpr);
		h = this.height = Math.floor(h*dpr);
    //
    var ow = lib.properties.width, oh = lib.properties.height;	
    this.stage.scaleX = w/ow;			
    this.stage.scaleY = h/oh;	
		//
		if (this.tickLast) this.reset();
	}

	p.start = function()
	{
		BasePiece.prototype.start.apply(this);
		//log("start",this.width, this.height, this.dpr);
		var cfg = this.config;
		this.road = this.stage.addChild(new lib.assets()).road;
		this.road.xOrig = this.road.x;
		this.road.yOrig = this.road.y;
		//
		this.totalframes = this.road.totalFrames;
		this.tiltstep = cfg.maxtilt/(this.totalframes/2);
		this.midframe = Math.round(.5+this.totalframes/2);
		this.curvestep = 2/this.totalframes;// for steering
		//
		this.initOvals();
		this.initStars();
    //
		if (this.width) this.reset();
	}
	
	p.reset = function()
	{
		var cfg = this.config, w = this.width, h = this.height, w2 = w/2, h2 = h/2;
    this.road.gotoAndStop(this.midframe);		
		this.acceleration = 0;
		this.turndir = 0;
		this.curve = 0;// -1..1
		this.speed = 0;// 0..1
		this.counter = 0;
		this.mouseIsDown = false;
		//
    if (this.paused) { this.update(); this.stage.update(); }
	}
	
	
	p.update = function()
	{
		var cfg = this.config;
		//
		var g = this.graphicsOvals.c();
		var df = this.speed/48;
		for (var j=0;j<this.ovals.length;j++) {
			this.ovals[j].draw(g.s(this.colorOvals));
			this.ovals[j].step(df);
		}
		//
		if (this.mouseIsDown)
		{
			this.acceleration = 1;
			if (Math.abs(this.startX - this.mouseX)>10) 
			{
				if (this.startX > this.mouseX) this.turndir = -1;
				else this.turndir = 1;
			} else {
				this.turndir = 0;
			}
		}
		//
		this.accelerate(this.acceleration);
		this.turn(this.turndir);
		this.tril(cfg.ampl * this.speed);
		this.counter ++;
		if (this.counter % cfg.tril_hor_freq==0) {
			this.trilHor(cfg.amplHor * this.speed);
		} else {
			this.road.x = this.road.xOrig;
		}
		//
		this.moveStars(this.curve * this.speed * cfg.starspeed);
		//
		return true;
	}	
		
	// DRIVING

	p.turn = function(dir) 
	{
		var cfg = this.config;
		if (dir == 0) 
		{
			// move back to middle of road
			var sgn = MathUtil.sgn(this.curve);
			if (Math.abs(this.curve)<.5) dir = .5 * this.speed * sgn;
			else dir = cfg.speed_back_to_middle * this.speed * sgn;
		}
		//calculate new curve
		this.curve -= this.speed * dir * this.curvestep;
		this.curve = Math.max(-1, Math.min(1, this.curve));
		//send road mc to right frame
		var fr = Math.round(.5*(this.curve+1) * (this.totalframes-1));
		this.road.gotoAndStop(fr);
	}

	p.accelerate = function(dir) 
	{
		var cfg = this.config;
		if (dir == 0) {
			dir = -.5 * MathUtil.sgn(this.speed);// lower speed when not accelerating
		}
		this.speed += dir * cfg.accelerationstep;
		this.speed  = Math.min(Math.max(-cfg.backward_driving, this.speed), 1);
		if (Math.abs(this.speed)<.05) this.speed = 0;
		//tilt road
		this.road.rotation = this.curve * this.speed * cfg.maxtilt;
	}

	//TREMBLING
	
	p.tril = function(a) 
	{
		if (this.road.y>this.road.yOrig) this.road.y = this.road.yOrig - a;
		else this.road.y = this.road.yOrig + a;
	}
	p.trilHor = function(a) 
	{
		if (this.road.x>this.road.xOrig) this.road.x = this.road.xOrig - a;
		else this.road.x = this.road.xOrig + a;
	}

	//STARS
	
	p.initStars = function()
	{
		this.starsWidth = lib.properties.width;
		this.road.stars0.x = 0;
		this.road.stars1.x = this.road.stars0.x + this.starsWidth;
		this.stars = [this.road.stars0, this.road.stars1];
	}
	
	p.moveStars = function(dx) 
	{
		var w = lib.properties.width;
		var s0 = this.stars[0], s1 = this.stars[1];
		s0.x += dx;
		if (s0.x >= w) s0.x -= w;
		else if (s0.x < -w) s0.x += w;
		if (s0.x > 0) s1.x = s0.x - w;
		else s1.x = s0.x + w;
	}
	
	// OVALS
	
	p.initOvals = function()
	{
		this.graphicsOvals = this.road.ovalsMc.addChild(new createjs.Shape()).graphics;
		this.colorOvals = "#000";
		//experiental values for center and sizes:
		var center = new Point(0,460);
		var small = new Point(227.5, 258.5);
		var big = new Point(600, 430.5);
		var thick = 22;
		var thin = .5;
		var ease = -200;
		//
		var n = 20;
		this.ovals = [];
		for (var i=0;i<n;i++) {
			var ov = new OvalTween(center, small, big, thick, thin, i/n, ease);
			this.ovals.push(ov);
			ov.draw(this.graphicsOvals.s(this.colorOvals));
		}
	}

	window.Piece = Piece;


	var OvalTween = function(mid, small, big, thick, thin, fract, ease) 
	{
		this.fract = fract;
		this.pos = mid;
		this.startsize = small;
		this.endsize = big;
		this.startthick = thick;
		this.endthick = thin;
		this.ease = ease;
	}

	OvalTween.prototype.draw = function(g) 
	{
		//uses: bias(p, factor)
		var ease0 = 1 - bias(this.fract, this.ease);
		var ease1 = 1 - bias(this.fract, this.ease);
		var linethick = this.startthick + ease0*(this.endthick - this.startthick);
		var rw = this.startsize.x + ease1*(this.endsize.x - this.startsize.x);
		var rh = this.startsize.y + ease1*(this.endsize.y - this.startsize.y);
		if (linethick<.6) return;
		g.ss(linethick);
		g.drawEllipse(this.pos.x-rw, this.pos.y-rh, rw*2,rh*2);
	}

	OvalTween.prototype.step = function(df) {
		this.fract += df;
		if (this.fract<0) this.fract += 1;
		else if (this.fract>1) this.fract -= 1;
	}

	function bias(p, factor) {
		//ease in of uit: factor tussen -100..100
		//p tussen 0..1
		var sign = factor/Math.abs(factor);
		factor = 1+.05*Math.min(100, Math.abs(factor));
		var res = sign == 1 ? 1-Math.abs(Math.pow(1-p, factor)) : Math.pow(p, factor);
		return res;
	}

	

}(window));
