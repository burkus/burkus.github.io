import {RegionQuadTree} from 'quadtreejs';
import Link from './link.js';
import Particle from './particle.js';
import Color from './color.js';

var links;
var tree;
var particles;
let length = 50;
var now, last, delta;
var canvas;
var user;

function setup() {
    canvas = createCanvas(displayWidth, displayHeight).parent('container');
    tree = new RegionQuadTree(width, height, 1000, 1);
    links = [];
    user = new Particle(0, 0, length);
    particles = (function() {
        var particles = [];
        for(var i = 0; i < 175; i++) {
            let x = map(noise(i + 5, i + 1), 0, 1, 0, width);
            let y = map(noise(i + 3, i + 2), 0, 1, 0, height);
            let r = map(noise(i), 0, 1, 3, length);
            let coinflip = Math.random() * 99 > 50;
            let c = null;
            if(coinflip) c = new Color(255, 10, 10);
            else c = new Color(10, 10, 255);
            particles.push(new Particle(x, y, r, c));
        }
        return particles;
    }());
}

function draw() {
    now = millis();
    delta = now - last;
    last = now;
    update(delta);
    background(0);
    for(var link of links) link.draw();
}

function update(delta) {
    user.position.x = window.mouseX;
    user.position.y = window.mouseY;
    var cache = [];
    links.length = 0;
    tree.clear();
    for(var particle of particles) particle.update(delta);

    tree.insert(particles);
    buildLinks(user, tree.retrieve(user));

    for(var particle of particles) {
        if(cache.indexOf(particle) !== -1) continue;
        var items = tree.retrieve(particle);

        buildLinks(particle, items);
        cache.push(particle);

        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(cache.indexOf(item) !== -1) continue;
            buildLinks(item, items);
        }

        cache.push.apply(cache, items);
    }
}

function buildLinks(particle, items) {
    for(var item of items) {
        if(item === particle) continue;
        if(particle.collision(item)) {
            let r = particle.color.red;
            let o = null;
            if(r < 250) {
                o = new Color(250, 10, 10);
            } else o = new Color(10, 10, 250);
            var link = new Link(particle, item);
            links.push(link);
        }
    }
}

function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.resize(w, h);
    width = w;
    height = h;
}

function mouseClicked() {
    particles.push(new Particle(mouseX, mouseY, floor(noise(random(10)) * length)));
}

function mouseDragged() {
    particles.push(new Particle(mouseX, mouseY, floor(noise(random(10)) * length)));
}

exports.setup = setup;
exports.draw = draw;
exports.canvas = canvas;
exports.resize = resize;
exports.clicked = mouseClicked;
exports.dragged = mouseDragged;
