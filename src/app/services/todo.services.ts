import { Injectable } from "@angular/core";
import { Itodo, ItodoRes } from "../models/todo";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class TodosService{

    todoArr : Array<Itodo> = [
        {
            todoItem : 'HTML',
            todoId : '123',
          
        },
        {
            todoItem : 'CSS',
            todoId : '124',
           
        },
          {
            todoItem : 'JAVASCRIPT',
            todoId : '125',
           
        },
         
    ]

    fetchTodos(): Observable<Itodo[]>{
        //API call to fetch TODOs data from DB
        return of(this.todoArr)
    }

    //add New TODO
    addTodo(todo : Itodo): Observable<ItodoRes>{
        //API Call add new todo in DB
        this.todoArr.push(todo)
        let res = {
            msg : `New todo Item with id ${todo.todoId} Create Successfully !!! `,
            data : todo.todoId
        }
        return of(res)
    }

}


