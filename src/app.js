import { setup, draw, canvas, resize, clicked, dragged } from './config.js';
require('./misc.css');
require('p5');

main();

function main() {
    window.canvas = canvas;
    window.resize = resize;
    window.setup = setup;
    window.draw = draw;
    window.mouseClicked = clicked;
    window.mouseDragged = dragged;
}
