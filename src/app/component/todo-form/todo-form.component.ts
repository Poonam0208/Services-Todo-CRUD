import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/models/todo';
import { SnackBarSerives } from 'src/app/services/snackBar.services';
import { TodosService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm !: NgForm
  isInEditMode:boolean = false

  constructor(
    private _todoServices : TodosService,
    private _snackBar : SnackBarSerives
  ) { }

  ngOnInit(): void {
  }

  // onTodoSubmit(todoForm : NgForm){
  //   //OBJECT
  //   console.log(todoForm.value)
  // }

  onTodoSubmit(){
    console.log(this.todoForm)
    if(this.todoForm.valid){
      // console.log(this.todoForm.value)
      let NEW_TODO : Itodo = {...this.todoForm.value, todoId: Date.now().toString()}
      // NEW_TODO.todoId = Date.now().toString()
      this.todoForm.reset()
      this._todoServices.addTodo(NEW_TODO) 
            .subscribe({
                 next : data =>{
                  console.log(data);
                  this._snackBar.openSnackBar(data.msg)
                 },
                 error: err =>{
                  console.log(err)
                 }
            })
    }
  }
}
