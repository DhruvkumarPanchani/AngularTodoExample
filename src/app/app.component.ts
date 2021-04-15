import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dhruv todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "change value";
    // }, 2000);
  }
  
}
