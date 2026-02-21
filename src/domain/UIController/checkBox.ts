import { UIcontrollerBase } from ".";

export class CheckBox extends UIcontrollerBase {
    private title: string;
    private isChecked: boolean;

    constructor(title: string) {
        super();
        this.title = title;
        this.isChecked = false;
    }

    draw(): void {
        console.log(`Drawing checkbox...`);
        console.log(this);
        
    }
}
