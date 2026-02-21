//!================== without memento pattern ==================//
// export class Editor {
//     private content: string = "";
//     private history: string[] = [];
//     // private prevState: string = "";

import { get } from "node:http";

//     getContent(): string {
//         return this.content;
//     }
//     setContent(content: string): void {
//         this.history.push(this.content); // Save the current state to history
//         this.content = content;
//     }
//     undo(): void {
//         console.log("Undoing the last change...");
//         if (this.history.length >= 1) {
//             this.content = this.history.pop()!; // Restore the last state from history
//         }
//         // this.content = this.prevState; // Restore the previous state
//         // This method would restore the previous state of the content
//         // In a real implementation, you would need to keep a history of changes
//     }
// }

// const editor = new Editor();
// editor.setContent("a");
// editor.setContent("b");
// editor.setContent("c");
// editor.setContent("d");
// console.log("Before====",editor.getContent());
// editor.undo();
// editor.undo();
// console.log("After 2 time undoing====",editor.getContent());

// =====================================================
//!================== with memento pattern ==================//

export class Editor {
    private content: string = "";

    getContent(): string {
        return this.content;
    }
    setContent(content: string) {
        this.content = content;
    }

    createState(): EditorState {
        return new EditorState(this.content);
    }
    restoreState(state: EditorState): void {
        this.content = state.getContent();
    }
}

class EditorState {
    private readonly content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}

export class History {
    private states: EditorState[] = [];

    pushState(state: EditorState): void {
        this.states.push(state);
    }
    popState(): EditorState {
        const state = this.states.pop();
        if (!state) throw new Error("No states to pop");
        return state;
    }
}
