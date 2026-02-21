import { ITools } from "./ITools";

export class Erazor implements ITools{

     private readonly icon: string = "eraser icon";

    mouseDown(): void {
        console.log("Eraser tool: mouse button pressed. Erasing started");
    }

    mouseUp(): void {
        console.log("Eraser tool: mouse button released. Erasing stopped");
    }

    mouseLeftClick(): void {
        console.log("Eraser tool: left mouse button clicked. Erased a small area");
    }

    mouseRightClick(): void {
        console.log("Eraser tool: right mouse button clicked. Showing eraser options.");
    }
}