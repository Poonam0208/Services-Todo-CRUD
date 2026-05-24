import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todo.services';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { config } from 'rxjs';
import { SnackBarSerives } from 'src/app/services/snackBar.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr : Array<Itodo> = []
  constructor(
  
    private _todoService : TodosService,
    private _snackBar : SnackBarSerives,
    private _matDialog : MatDialog
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

  onRemove(RemoveId : string){
    let Config = new MatDialogConfig()
    Config.width = '400px';
    Config.disableClose = true;
    Config.data = `Are you sure, you want to remove the TodoItem With Id${RemoveId} ?`
    let matRef = this._matDialog.open(GetConfirmComponent, Config)
    matRef.afterClosed()
       .subscribe(getConfirm =>{
        if(getConfirm ){
          //API CALL
          this._todoService.removeTodo(RemoveId)
          .subscribe({
            next : res =>{
              console.log(res)
              this._snackBar.openSnackBar(res.msg)
            },
            error : err =>{
              console.log(err)
            }

          })
        }
       }) 
  }

  onTodoEdit(todo : Itodo){
    console.log(todo)
    this._todoService.editTodoSub$.next(todo)
  }
}
