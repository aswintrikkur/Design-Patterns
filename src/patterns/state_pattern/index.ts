import { Canvas } from "./v1.0/canvas";
import { Brush } from "./v1.0/Tools/brush";
import { Erazor } from "./v1.0/Tools/erazor";
import { Pencil } from "./v1.0/Tools/pencil";
import { Selection } from "./v1.0/Tools/selection";

// create canvas
const canvas = new Canvas();

//initialise tools
const brush = new Brush();
const pencil = new Pencil();
const erazor = new Erazor();
const selection = new Selection();

// operations on canvas
canvas.selectTool(brush);
canvas.mouseDown();
canvas.mouseUp();

console.log("==========================");

canvas.selectTool(selection);
canvas.mouseDown();
canvas.mouseUp();
