
class Link {
    constructor(v1, v2, index) {
        this.v1 = v1;
        this.v2 = v2;
        this.display = false;
        this.index = index;
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

    update(v1, v2) {
      if(v1) this.v1 = v1;
      if(v2) this.v2 = v2;
      return this;
    }
}

export default Link;
