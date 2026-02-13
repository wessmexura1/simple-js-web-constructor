import { TextBlock, TitleBlock } from "./blocks";
import { block } from "../utils";

export class Sidebar {
    constructor(selector, updCallback) {
        this.$el = document.querySelector(selector);
        this.update = updCallback;
        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template);
        this.$el.addEventListener("submit", this.add.bind(this));
    }

    get template() {
        return [block("Text"), block("Title")].join("");
    }

    add(event) {
        event.preventDefault();

        const type = event.target.name.toLowerCase();
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        const newBlock = type === "text" ? new TextBlock(value, { styles }) : new TitleBlock(value, { styles });

        this.update(newBlock);

        event.target.value.value = "";
        event.target.styles.value = "";
    }
}
