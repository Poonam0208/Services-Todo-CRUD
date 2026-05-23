import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class TodosService{

    todoArr : Array<Itodo> = [
        {
            todoItem : 'HTML',
            todoId : '123',
            isCompleted : true
        },
        {
            todoItem : 'CSS',
            todoId : '124',
            isCompleted : false
        },
          {
            todoItem : 'JAVASCRIPT',
            todoId : '125',
            isCompleted : true
        },
         
    ]

    fetchTodos(): Observable<Itodo[]>{
        //API call to fetch TODOs data from DB
        return of(this.todoArr)
    }

}


