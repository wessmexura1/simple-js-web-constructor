import { row, col, css } from "/utils.js";

class Block {
    constructor(value, option) {
        this.value = value;
        this.option = option;
    }

    toHtml() {
        throw new Error("The ToHtml method must be implemented");
    }
}

export class TitleBlock extends Block {
    constructor(value, option) {
        super(value, option);
    }

    toHtml() {
        const { tag = "h1", styles } = this.option;
        return row(col(`<${tag}>${this.value}</$>`), css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, option) {
        super( value, option);
    }

    toHtml() {
        const html = this.value.map(col).join("");
        return row(html, css(this.option.styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, option) {
        super(value, option);
    }

    toHtml() {
        const { imgStyles: imgS, alt } = this.option;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imgS)}" >`);
    }
}

export class TextBlock extends Block {
    constructor(value, option) {
        super(value, option);
    }

    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.option.styles));
    }
}
