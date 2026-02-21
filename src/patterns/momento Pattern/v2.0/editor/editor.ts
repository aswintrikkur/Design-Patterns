//!================== with memento pattern and dependancy injection ==================//

export class Editor {
    private content: string = "";
    private title: string = "";

    constructor(private history: History) {}

    getContent(): string {
        return this.content;
    }
    setContent(content: string) {
        this.history.pushState(this.createState());
        this.content = content;
    }

    undo() {
        const state = this.history.popState();
        this.restoreState(state);
    }

    private createState(): EditorState {
        return new EditorState(this.content);
    }
    private restoreState(state: EditorState): void {
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
