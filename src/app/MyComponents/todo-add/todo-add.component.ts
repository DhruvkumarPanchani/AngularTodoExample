import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title:string;
  desc:string;

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 9,
      title:this.title,
      desc:this.desc,
      active:true
    }

    this.todoAdd.emit(todo);


  }

}
