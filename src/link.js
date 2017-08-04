import Color from './color.js';
class Link {
    constructor(v1, v2, color, outline) {
        this.v1 = v1;
        this.v2 = v2;
        this.color = color ? color : new Color(150, 10, 10);
        this.outline = outline ? outline : new Color(0, 0, 0);
    }

    draw() {
        push();
        stroke(...this.outline.colors());
        strokeWeight(8.0);
        line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
        strokeWeight(4.0);
        stroke(...this.color.colors());
        line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
        pop();
    }
}

export default Link;
