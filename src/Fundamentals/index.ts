export class Fundamentals {
    constructor() {
        console.log("Fundamentals class Initialised-------");
    }
    greet(): string {
        return "Hello from Fundamentals";
    }
}

//? -------------------- Encapsulation and Abstraction-------------------------------
// coupling data and methods that operate on that data within a single unit (class)
// and restricting access to some of the object's components.
/*
class School {
    private _name: string = "";

    get name(): string {
        return this._name;
    }
    printSchoolName(): void {
        console.log(`The school name is: ${this._name}`);
    }
    setSchoolName(name: string): void {
        this._name = name;
    }
}

const school = new School();
school.setSchoolName("Greenwood High");
console.log(school.name);
school.printSchoolName();
*/
// console.log(school._name)//* Abstraction -
// Error: Property '_name' is private and only accessible within class 'School'.
//================================================================

// ? -------------------- Inheritance-------------------------------
// mechanism where a new class (child) is derived from an existing class (parent),
// inheriting its properties and behaviors while allowing for additional features or modifications.

/*
// base class
class UIController {
	enable(name: string): void {
		console.log(`${name ? name + " enabled" : "UI Controller Enabled"}`);
	}
}

// derived class
class Button extends UIController {
	click(): void {
		console.log("Button Clicked");
	}
	
	enable(): void {
		super.enable("Button");
	}	
}

// another derived class
class TextBox extends UIController {
	type(): void {
		console.log("Typing in TextBox");
	}
	enable(): void {
		super.enable("TextBox");
	}
}

const primaryButton = new Button();
primaryButton.click()
primaryButton.enable()

const nameInput = new TextBox();
nameInput.type();
nameInput.enable();
*/
//================================================================

// ? -------------------- Polymorphism-------------------------------
// ability of different classes to be treated as instances of the same class through a common interface,
// allowing for different implementations of the same method to be called based on the object's actual type.
interface IUIController {
    render(): void;
    draw(): void;
}

abstract class UIControllerBase implements IUIController {
    render(): void {
        console.log("Rendering UI...");
    }
    abstract draw(): void;
}

class CheckBox extends UIControllerBase {
    private title: string;
    private isChecked: boolean;

    constructor(title: string) {
        super();
        this.title = title;
        this.isChecked = false;
    }

    draw(): void {
        console.log(`Drawing checkbox: ${this.title}`);
    }
    printStatus(): void {
        console.log(`${this.title} is currently ${this.isChecked ? "checked" : "unchecked"}`);
    }
    toggle(): void {
        this.isChecked = !this.isChecked;
        console.log("checkbox has toggled");

        this.printStatus();
    }
}

class RadioButton extends UIControllerBase {
    private title: string;
    private isSelected: boolean;
    private options: string[];
    private selectedValue: string;

    constructor(title: string, options: string[]) {
        super();
        this.title = title;
        this.isSelected = false;
        this.options = options;
        this.selectedValue = "";
        this.render();
    }

    draw(): void {
        console.log(`Drawing radio button: ${this.title}`);
    }
    select(value: string): void {
        if (this.options.includes(value)) {
            this.isSelected = true;
            this.selectedValue = value;
            console.log(`${this.title} selected: ${value}`);
        } else {
            console.log(`Invalid option for ${this.title}: ${value}`);
        }
    }

    printStatus(): void {
        if (this.isSelected) {
            console.log(`${this.title} is currently selected: ${this.selectedValue}`);
        } else {
            console.log(`${this.title} is currently not selected`);
        }
    }
}

// const checkBox1 = new CheckBox("Checkbox 1");
// checkBox1.draw();
// checkBox1.toggle();
// checkBox1.toggle();

// const radioButton1 = new RadioButton("Radio Button 1", ["Option A", "Option B", "Option C"]);
// radioButton1.draw();
// radioButton1.select("Option B");
// radioButton1.select("Option D"); // Invalid option
// radioButton1.select("Option A");
// radioButton1.printStatus();


//?-------------- Polymorphism in action(treating different UI elements through a common interface)
class Dropdown extends UIControllerBase {
    draw(): void {
        console.log(`Drawing dropdown`);
    }
}
class Slider extends UIControllerBase {
    draw(): void {
        console.log(`Drawing slider`);
    }
}

// function to draw any UI element that implements IUIController
class drawUIController {
    constructor(private uiController: IUIController) {
        this.uiController.draw();
    }
}

// this allows us to treat different UI elements (Checkbox, RadioButton, Dropdown, Slider) through a common interface (IUIController)
// const newUIElement = new drawUIController(new Dropdown());
const newUIElement = new drawUIController(new Slider());

//================================================================
