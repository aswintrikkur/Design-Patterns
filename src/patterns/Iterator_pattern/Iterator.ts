//========= interface ============
interface Iterator {
    hasNext(): boolean;
    current(): string;
    next(): void;
    getIndex(): number;
}

//================== concrete Iterator ===========

//================== ArrayIterator ==============
export class ArrayIterator implements Iterator {
    private array: string[] = []; 
    private index: number = 0;

    constructor(array: string[]) {
        this.array = array;
    }

    hasNext() {
        return this.array.length > this.index;
    }
    current() {
        return this.array[this.index];
    }
    next() {
        this.index++;
    }
    getIndex() {
        return this.index;
    }
}

//============ linkedList Iterator ===============
export class LinkedListIterator implements Iterator {
    private currentNode: LinkedListNode | null;
    private index: number = 0;

    constructor(head: LinkedListNode | null) {
        this.currentNode = head;
    }

    hasNext(): boolean {
        return this.currentNode !== null;
    }

    current(): string {
        return this.currentNode?.value ?? '';
    }

    next(): void {
        if (this.currentNode) {
            this.currentNode = this.currentNode.next;
            this.index++;
        }
    }

    getIndex(): number {
        return this.index;
    }
}

export interface LinkedListNode {
    value: string;
    next: LinkedListNode | null;
}

//================== stack Iterator ==============