
class Link {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }

    draw() {
        push();
        stroke(0);
        strokeWeight(4.0);
        line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
        strokeWeight(2.0);
        stroke(200, 10, 10);
        line(this.v1.x, this.v1.y, this.v2.x, this.v2.y);
        pop();
    }
}

export default Link;
