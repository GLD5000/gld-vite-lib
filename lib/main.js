"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = helloWorld;
exports.helloAnything = helloAnything;
function helloWorld(hello) {
    console.log("hello:", hello);
    return hello;
}
function helloAnything(thing) {
    return "Hello ".concat(thing, "!");
}
