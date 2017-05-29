function button(w, h, x, y, label) {
    this.label = label;
    this.w = w;
    this.h = h;
    this.x = x - this.w / 2;
    this.y = y - this.h / 2;
    this.show = function() {
        fill(0, 0, 0);
        rect(this.x, this.y, this.w, this.h);
        textSize(11);
        fill(75, 255, 150);
        textAlign(CENTER, CENTER);
        text(this.label, this.x, this.y, this.w, this.h);
    }
    this.testClick = function() {
        if (mouseX >= this.x && mouseX <= this.x + this.w && mouseIsPressed) {
            if (mouseY >= this.y && mouseY <= this.y + this.h) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function soundMenu(sound, x, y, path, name) {
    this.sound = sound;
    this.x = x;
    this.y = y;
    this.play = new button(65, 50, this.x, this.y, 'play/resume');
    this.stop = new button(50, 50, this.x + 70, this.y, 'pause');
    this.show = function() {
        fill(0);
        rect(this.x+100, this.y-5, map(this.sound.currentTime(), 0, this.sound.duration(), 0, 200), 10);
        this.play.show();
        this.stop.show();
    }
    this.update = function() {
        if (this.play.testClick() && !this.sound.isPlaying()) {
            this.sound.play();
        }

        if (this.stop.testClick()) {
            this.sound.pause();
        }
    }
}