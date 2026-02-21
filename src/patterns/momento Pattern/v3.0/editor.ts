//!================== with memento pattern and dependancy injection ==================//
// ! ------------ made history reusability ------------
// ! ------------ handling multiple states ------------

export enum editorFields {
    content = "content",
    title = "title",
}

export class Editor {
    private content: string = "";
    private fontName: string = "";
    private fontSize: number = 0;

    constructor(private history: History<EditorState>) {}

    getContent(): string {
        return this.content;
    }
    setContent(content: string) {
        this.history.pushState(this.createState());
        this.content = content;
    }

    getfontName(): string {
        return this.fontName;
    }
    setfontName(fontName: string) {
        this.history.pushState(this.createState());
        this.fontName = fontName;
    }

    getFontSize(): number {
        return this.fontSize;
    }
    setFontSize(fontSize: number) {
        this.history.pushState(this.createState());
        this.fontSize = fontSize;
    }

    undo() {
        const state = this.history.popState();
        this.restoreState(state);
    }

    private createState(): EditorState {
        return new EditorState(this.content);
        // switch for the title and content
    }
    private restoreState(state: EditorState): void {
        this.content = state.getContent();
        // switch for the title and content
    }
}

export class EditorState {
    private readonly content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}

export class History<T> {
    private states: T[] = [];

    pushState(state: T): void {
        this.states.push(state);
    }

    popState(): T {
        const state = this.states.pop();
        if (!state) throw new Error("No states to pop");
        return state;
    }
}
