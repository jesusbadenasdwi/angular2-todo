import {bootstrap} from 'angular2/platform/browser';
import ToDoList from './todolist/todolist';
import {TodoStore} from './store/todoStore';

bootstrap(ToDoList, [TodoStore]);
