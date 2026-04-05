import { ArrayIterator } from "./Iterator";

export class BrowseHistory {
    // In the future I can change the dataType and it won't affect the index.ts(mail file).
    private history: string[] = [];

    push(url: string) {
        this.history?.push(url);
    }
    pop(): string {
        const url = this.history?.pop();
        if (!url) throw new Error("can't pop before adding any url");
        return url;
    }

    getHistory() {
        return this.history;
    }
    createIterator() {
        //change the Concrete Iterator when changing the dataType
        return new ArrayIterator(this.history);
    }
}
