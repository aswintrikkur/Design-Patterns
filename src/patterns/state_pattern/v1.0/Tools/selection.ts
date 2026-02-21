import { ITools } from "./ITools";

export class Selection implements ITools {
    private readonly icon: string = "selection icon";

    mouseDown(): void {
        console.log("Selection tool: mouse button pressed. selection rectangle initiated");
    }

    mouseUp(): void {
        console.log("Selection tool: mouse button released. selection rectangle completed");
    }

    mouseLeftClick(): void {
        console.log("Selection tool: left mouse button clicked. Selecting object.");
    }

    mouseRightClick(): void {
        console.log("Selection tool: right mouse button clicked. Showing context menu.");
    }
}
