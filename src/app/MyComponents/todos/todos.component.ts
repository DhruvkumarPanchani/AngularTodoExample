import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'] 
})
export class TodosComponent implements OnInit {
  localItem: any;
  todos: Todo[];
  constructor() {

    this.localItem = localStorage.getItem('todos');

    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }


    // this.todos = [
    //   {
    //     sno:1,
    //     title:"this is title1",
    //     desc:"this is desc1",
    //     active: true

    //   },
    //   {
    //     sno:2,
    //     title:"this is title2",
    //     desc:"this is desc2",
    //     active: true

    //   },
    //   {
    //     sno:3,
    //     title:"this is title3",
    //     desc:"this is desc3",
    //     active: true

    //   }

    // ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

}
