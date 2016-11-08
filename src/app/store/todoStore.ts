export class TodoItem {
    _text: String;
    _done: Boolean;

    constructor(text: String) {
        this._text = text;
        this._done = false;
    }

    get text() {
        return this._text;
    }

    get done() {
        return this._done;
    }

    set done(done: Boolean) {
        this._done = done;
    }
}

export class TodoStore {
    items: TodoItem[];

    constructor() {
        this.items = [];
    }

    addItem(newItem: String) {
        this.items.push(new TodoItem(newItem));
    }

    removeItem(item: TodoItem) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}
