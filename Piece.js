(function(window) {
    var Piece = function(canvas, config) {
        this.initialize(canvas, config);
    }
    var p = Piece.prototype = new BasePiece();
    
    // Crear un objeto de audio para el archivo "Packing It Up.mp3"
    var audio = new Audio('Packing It Up.mp3');
    audio.onload = function() {
        console.log('Audio cargado correctamente');
    }
    audio.onerror = function() {
        console.log('Error al cargar el audio');
    }

    p.initialize = function(canvas, config) {
        BasePiece.prototype.initialize.call(this, canvas, config);
        this.initInteraction();
        window.onkeydown = this.onKeyDown.bind(this);
    }

    p.onKeyDown = function(e) {
        var keycode = e.which;
        // Teclas de dirección
        if (keycode == 37) this.turndir = -1; // izquierda
        if (keycode == 39) this.turndir = 1;  // derecha
        if (keycode == 38) this.acceleration = 1;  // avanzar
        if (keycode == 40) this.acceleration = -1; // retroceder
    }

    // Controla el audio según `this.config.debug`
    p.onKeyUp = function(e) {
        BasePiece.prototype.onKeyUp.call(this, e);
        var keycode = e.which;
        if (keycode == 37 || keycode == 39) this.turndir = 0;
        if (keycode == 38 || keycode == 40) this.acceleration = 0;

        // Verificar si el modo de depuración está activo y controlar el audio
        if (this.config.debug) {
            if (audio.paused) {
                console.log('Reproduciendo audio');
                audio.play();
            }
        } else {
            if (!audio.paused) {
                console.log('Pausando audio');
                audio.pause();
            }
        }

        // Comandos de depuración adicionales
        var c = String.fromCharCode(e.which);
        if (c == "R") this.reset();
        else if (c == "C") this.colorOvals = this.colorOvals == "#000" ? "#00F" : "#000";
    }

    /*********************************
     *          INTERACTION
     ********************************/
    
    p.initInteraction = function() {
        this.stage.addEventListener("stagemousedown", this.handleMouseDown.bind(this));
        this.stage.addEventListener("stagemousemove", this.handleMouseMove.bind(this));
        this.stage.addEventListener("stagemouseup", this.handleMouseUp.bind(this));
    }
    
    p.handleMouseDown = function(e) {
        if (this.pointerID) return;
        this.pointerID = e.pointerID;
        this.mouseIsDown = true;
        this.startX = this.mouseX = e.stageX;
    }
    
    p.handleMouseMove = function(e) {
        if (e.pointerID != this.pointerID) return;
        this.mouseX = e.stageX;
    }
    
    p.handleMouseUp = function(e) {
        if (e.pointerID != this.pointerID) return;
        this.pointerID = null;
        this.mouseIsDown = false;
        this.acceleration = 0;
        this.turndir = 0;
    }

    /*********************************
     *            FLOW
     ********************************/
    
    p.setSize = function(w, h, dpr) {
        this.dpr = dpr;
        w = this.width = Math.floor(w * dpr);
        h = this.height = Math.floor(h * dpr);
        var ow = lib.properties.width, oh = lib.properties.height;    
        this.stage.scaleX = w / ow;            
        this.stage.scaleY = h / oh;
        if (this.tickLast) this.reset();
    }

    p.start = function() {
        BasePiece.prototype.start.apply(this);
        var cfg = this.config;
        this.road = this.stage.addChild(new lib.assets()).road;
        this.road.xOrig = this.road.x;
        this.road.yOrig = this.road.y;
        this.totalframes = this.road.totalFrames;
        this.tiltstep = cfg.maxtilt / (this.totalframes / 2);
        this.midframe = Math.round(.5 + this.totalframes / 2);
        this.curvestep = 2 / this.totalframes;
        this.initOvals();
        this.initStars();
        if (this.width) this.reset();
    }
    
    p.reset = function() {
        var cfg = this.config;
        this.road.gotoAndStop(this.midframe);
        this.acceleration = 0;
        this.turndir = 0;
        this.curve = 0;
        this.speed = 0;
        this.counter = 0;
        this.mouseIsDown = false;
        if (this.paused) { this.update(); this.stage.update(); }
    }
    
    /*********************************
     *         MOVEMENT & EFFECTS
     ********************************/
    
    p.update = function() {
        var cfg = this.config;
        var g = this.graphicsOvals.c();
        var df = this.speed / 48;
        for (var j = 0; j < this.ovals.length; j++) {
            this.ovals[j].draw(g.s(this.colorOvals));
            this.ovals[j].step(df);
        }
        if (this.mouseIsDown) {
            this.acceleration = 1;
            if (Math.abs(this.startX - this.mouseX) > 10) {
                this.turndir = this.startX > this.mouseX ? -1 : 1;
            } else {
                this.turndir = 0;
            }
        }
        this.accelerate(this.acceleration);
        this.turn(this.turndir);
        this.tril(cfg.ampl * this.speed);
        this.counter++;
        if (this.counter % cfg.tril_hor_freq == 0) {
            this.trilHor(cfg.amplHor * this.speed);
        } else {
            this.road.x = this.road.xOrig;
        }
        this.moveStars(this.curve * this.speed * cfg.starspeed);
        return true;
    }
    
    // DRIVING: control de curvas y rotación de auto
    p.turn = function(dir) {
        var cfg = this.config;
        if (dir == 0) {
            var sgn = MathUtil.sgn(this.curve);
            dir = Math.abs(this.curve) < 0.5 ? 0.5 * this.speed * sgn : cfg.speed_back_to_middle * this.speed * sgn;
        }
        this.curve -= this.speed * dir * this.curvestep;
        this.curve = Math.max(-1, Math.min(1, this.curve));
        var fr = Math.round(0.5 * (this.curve + 1) * (this.totalframes - 1));
        this.road.gotoAndStop(fr);

        // Acceder y ajustar la rotación del auto en el DOM
        var carImage = document.getElementById('carImage');
        if (carImage) {
            var angle = this.curve * 15; // Control de ángulo de rotación
            carImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
    }

    // Funciones de temblor ajustadas
    p.tril = function(a) {
        if (this.speed > 0.1) {
            this.road.y = this.road.y > this.road.yOrig ? this.road.yOrig - a * 0.3 : this.road.yOrig + a * 0.3;
        } else {
            this.road.y = this.road.yOrig;
        }
    }
    
    p.trilHor = function(a) {
        if (this.speed > 0.1) {
            this.road.x = this.road.x > this.road.xOrig ? this.road.xOrig - a * 0.3 : this.road.xOrig + a * 0.3;
        } else {
            this.road.x = this.road.xOrig;
        }
    }

    window.Piece = Piece;

}(window));
