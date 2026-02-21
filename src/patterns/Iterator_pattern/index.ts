import { BrowseHistory } from "./browseHistory";

const browserHistory = new BrowseHistory();

browserHistory.push("github.com");
browserHistory.push("draw.io");
browserHistory.push("facebook.com");
browserHistory.push("linkedIn.com");

browserHistory.pop();

const history = browserHistory.getHistory();
console.log("history =", history);

const iterator = browserHistory.createIterator();

while (iterator.hasNext()) {
    console.log(`url no.${iterator.getIndex() + 1}====${iterator.current()}`);
    iterator.next();
}
