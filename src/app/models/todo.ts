
export interface Itodo {
   todoItem: string;
    todoId: string;   
}

export interface IRes<T>{
    msg : string;
    data : T;
}

export interface ItodoRes {
    msg: string;
    data: Itodo;
}