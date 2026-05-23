import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr : Array<Itodo> = []
  constructor(
    private _todoService : TodosService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchTodos()
      .subscribe({
        next : data =>{
          console.log(data)
          this.todoArr = data
        },
        error : err =>{
          console.log(err)
        }
      })
  }

}
