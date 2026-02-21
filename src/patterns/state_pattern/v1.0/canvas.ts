import { ITools } from "./Tools/ITools";

export class Canvas {
    private currentTool: ITools | undefined;

    selectTool(tool: ITools) {
        this.currentTool = tool;
        console.log("selected Tool=", tool);
    }

    mouseDown() {
        console.log("Mouse down event");
        this.currentTool?.mouseDown();
    }
    mouseUp() {
        console.log("Mouse up event");
        this.currentTool?.mouseUp();
    }
    mouseLeftClick() {
        console.log("mouse left click event");
        this.currentTool?.mouseLeftClick();
    }
    mouseRightClick() {
        console.log("mouse right click event");
        this.currentTool?.mouseRightClick();
    }
}
