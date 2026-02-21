import { ITools } from "./ITools";

export class Brush implements ITools {
    private readonly icon: string = "brush icon";

    mouseDown(): void {
        console.log("Brush tool: mouse button pressed. Paint stroke initiated");
    }

    mouseUp(): void {
        console.log("Brush tool: mouse button released. paint stroke completed");
    }

    mouseLeftClick(): void {
        console.log("Brush tool: left mouse button clicked. Painting stroke.");
    }

    mouseRightClick(): void {
        console.log("Brush tool: right mouse button clicked. Showing brush options.");
    }
}
