---
layout: post
title:  "Functional Programming"
date:   2015-09-02
categories: tech
---
Functional Programming is no longer marginalized, and for those who are somewhat
adventurous, it's become the go-to smear campaign for anyone who wants to attack
any other langauge/paradigm/environment. The cycle is, more or less: an article
about Haskell or Clojure comes out and praises the hell out of the
functional paradigm. These articles usually go on to compare the OO approach with
the functional approach, and end up leaving a naive reader with "OO sucks".
This is not, well usually not, the writer's fault. The problem lies with those
who fail to grasp that the article is highly contextual, and that the real message
of the dialogue is "in this situation, the functional approach is preferable".

What I've seen more and more of lately, is programmers who loosely understand what
a functional approach is bashing the hell out of OO incessantly for no apparent
reason other than their insecurity. The basics of functional programming are not
map, reduce and apply. Modern functional languages rely heavily on objects.
Objects always have been and always will be a great way to represent data. The
"problem" with OO isn't actually a problem with OO, it's a problem with programming
in general. Mutating variables across multiple namespaces and threads isn't practical.
On top of that, the complexity of a project essentially goes through a combinatorial
boom when you start locking threads.

These are classic programming problems-the ones you create for yourself. Instead
of laying mines down on your project, don't. Don't mutate variables, don't lock threads.
Mutable state is an oxy-moron, as mutating a state creates a new state. The state
of a program can be thought of as a flipbook, each page representing a unique state.

![flipbook](http://i.imgur.com/eM7uP.gif)

There would still be a "page" object containing the various collections of image
data to be drawn on top of it. The only difference is that each call to a supposed
"update" method would return a collection of position/image data, rather than modify
all the object instances accordingly.

But that's all off point. Objects aren't changing, how we handle them is.
