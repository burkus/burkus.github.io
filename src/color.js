export default class Color {
  constructor(r, g, b, a) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }

  green(g) {
    this.green = g;
  }

  blue(b) {
    this.blue = b;
  }

  red(r) {
    this.red = r;
  }

  colors() {
    return [this.red, this.green, this.blue];
  }
}
