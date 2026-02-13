import { row, col, css } from "/utils.js";

function title(block) {
    const { tag = "h1", styles } = block.option;
    return row(col(`<${tag}>${block.value}</$>`), css(styles));
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.option.styles))
}

function columns(block) {
    const html = block.value.map(col).join("");
    return row(html, css(block.option.styles));
}

function image(block) {
    const {imgStyles: imgS, alt} = block.option;
    return row(`<img src="${block.value}" alt="${alt}" style="${css(imgS)}" >`);
}

export const templates = {
    title,
    columns,
    image,
    text,
};
