import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: String = '';
  todoItem: String = '';
  todoItems: Array<String> = [];


  ngOnInit() {
    this.title = "Backstreet Bakery Todo App";
  }

  updateList() {
    this.todoItems.push(this.todoItem);
    this.todoItem = '';
  }
}
