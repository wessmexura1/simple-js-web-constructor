class Block {
    constructor(type, value, option) {
        this.type = type;
        this.value = value;
        this.option = option;
    }
}

export class TitleBlock extends Block {
    constructor (value, option) {
        super('title', value, option)
    }
}

export class ColumnsBlock extends Block {
    constructor (value, option) {
        super('columns', value, option)
    }
}


export class ImageBlock extends Block {
    constructor (value, option) {
        super('image', value, option)
    }
}


export class TextBlock extends Block {
    constructor (value, option) {
        super('text', value, option)
    }
}
