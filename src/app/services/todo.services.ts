import { Injectable } from "@angular/core";
import { IRes, Itodo, ItodoRes } from "../models/todo";
import { Observable, of, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TodosService {

    todoArr: Array<Itodo> = [
        {
            todoItem: 'HTML',
            todoId: '123',

        },
        {
            todoItem: 'CSS',
            todoId: '124',

        },
        {
            todoItem: 'JAVASCRIPT',
            todoId: '125',

        },

    ]

    editTodoSub$ : Subject<Itodo> = new Subject<Itodo>()

    fetchTodos(): Observable<Itodo[]> {
        //API call to fetch TODOs data from DB
        return of(this.todoArr)
    }

    //add New TODO
    addTodo(todo: Itodo): Observable<IRes<string>> {

        this.todoArr.push(todo)

        return of({
            msg: `New todo Item with id ${todo.todoId} Created Successfully !!!`,
            data: todo.todoId
        })
    }

    //Remove Todo

    removeTodo(id: string): Observable<IRes<Itodo>> {
        let GET_INDEX = this.todoArr.findIndex(t => t.todoId === id)
        let RemoveTodo = this.todoArr.splice(GET_INDEX, 1);

        return of({
            msg: `The Todo Item With ${id} is removed Successfully !!!`,
            data: RemoveTodo[0]
        })
    }

    //Update Todo>>

    updateTodo(updateTodo : Itodo):Observable<IRes<Itodo>>{
        let GET_INDEX = this.todoArr.findIndex(t => t.todoId === updateTodo.todoId)
        this.todoArr[GET_INDEX] = updateTodo

        return of({
            msg : `The todo Item with id ${updateTodo.todoId} is updated successfully !!!`,
            data : updateTodo
        })
    }
}


