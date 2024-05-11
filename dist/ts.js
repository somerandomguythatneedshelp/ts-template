"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleFunction2 = exports.SampleFunction = void 0;
function SampleFunction() {
    SampleFunction2("Bob");
    console.log("If you put export function FunctionName then you can access said function from another file by importing it");
}
exports.SampleFunction = SampleFunction;
function SampleFunction2(name) {
    console.log("Your name is " + name);
}
exports.SampleFunction2 = SampleFunction2;
