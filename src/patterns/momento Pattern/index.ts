//! ====================== v1 - momento pattern ===============================
/*
import { Editor, History } from "./v1.0/editor/editor";

const editor = new Editor();
const history = new History();

editor.setContent("a");

//before changing the content, we save the current state to history
history.pushState(editor.createState());
editor.setContent("b");

history.pushState(editor.createState());
editor.setContent("c");

history.pushState(editor.createState());
editor.setContent("d");


console.log("Before=========",editor.getContent());

editor.restoreState(history.popState());
editor.restoreState(history.popState());
console.log("After 2 time undoing====",editor.getContent());

*/



//! =============== v2 - momento pattern with stronger encapsulation ===============================
/*
import { Editor, History } from "./v2.0/editor/editor";

const history = new History()
const editor = new Editor(history);


editor.setContent("a");
editor.setContent("b");
editor.setContent("c");
editor.setContent("d");

console.log("Before=========",editor.getContent());


editor.undo()
editor.undo()

console.log("After==========",editor.getContent());
*/


//! ====== v3 - momento pattern with stronger encapsulation and reusable history ===============================

import { Editor, EditorState, History } from "./v3.0/editor";

const history = new History<EditorState>()
const editor = new Editor(history)

editor.setContent("a")
editor.setContent("b")
editor.setContent("c")
editor.setContent("d")

// editor.undo();

console.log(editor.getContent());



