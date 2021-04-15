import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    console.log("onClick Delete has been trigger");
    this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo:Todo){
    this.todoCheckBox.emit(todo);

  }

}
