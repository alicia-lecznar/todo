import { Component, OnInit } from '@angular/core';
import {Todo} from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: Todo[]=[
    {task: "laundry",
    completed: false},

    {task: "dishes",
    completed: true},

    {task: "dusting",
    completed: true},

    {task: "wash car",
    completed:false},
    
    {task: "vacuum",
    completed: true}

  ];

  constructor() { }

  ngOnInit() {
  }

}
