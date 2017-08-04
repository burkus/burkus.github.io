require('p5');

let speed = 0.05;
function genSpeed() {
        let n = noise(random(0, 600));
        return map(n, 0, 1, -speed, speed);
}

class Particle {
    constructor(x, y, r) {
        this.position = createVector(x, y);
        this.r = r;
        this.diameter = r * 2;
        this.velocity = createVector(genSpeed(), genSpeed());
    }

    get height() {
        return this.diameter;
    }

    get width() {
        return this.diameter;
    }

    get x() {
        return this.position.x;
    }

    get y() {
        return this.position.y;
    }

    update(delta) {
        this.position.add(this.velocity.copy().mult(delta));

        let offscreen = this.position.x < -this.r ||
                        this.position.y < -this.r ||
                        this.position.x > width + this.r ||
                        this.position.y > height + this.r;
        if(offscreen) {
            this.position = createVector(noise(random(150)) * window.width,
                                        noise(random(150)) * window.height);
            this.velocity = createVector(genSpeed(), genSpeed());
        }
    }

    collision(other) {
        return (
            dist(this.x, this.y, other.x, other.y) <= this.r + other.r
        )
    }

    draw() {
        push();
        noFill();
        stroke(200);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        pop();
    }
}

export default Particle;
