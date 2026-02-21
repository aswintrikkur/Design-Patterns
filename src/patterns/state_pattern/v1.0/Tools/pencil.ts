import { ITools } from "./ITools";

export class Pencil implements ITools{

     private readonly icon: string = "pencil icon";

    mouseDown(): void {
        console.log("Pencil tool: mouse button pressed. Pencil stroke initiated");
    }

    mouseUp(): void {
        console.log("Pencil tool: mouse button released.Pencil stroke completed");
    }

    mouseLeftClick(): void {
        console.log("Pencil tool: left mouse button clicked. Pencil dot marked");
    }

    mouseRightClick(): void {
        console.log("Pencil tool: right mouse button clicked. Showing context menu.");
    }   
}