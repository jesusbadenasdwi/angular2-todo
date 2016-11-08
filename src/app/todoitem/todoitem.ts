import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../store/todoStore';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/todoitem/todoitem.html',
    styleUrls: ['app/todoitem/todoitem.css']
})
export default class TodoItem {
    @Input()
    item: TodoItemModel;

    @Output()
    remove = new EventEmitter();

    removeClicked() {
        this.remove.emit(this.item);
    }

    doneClicked(event) {
        this.item.done = event.target.checked;
    }
}
