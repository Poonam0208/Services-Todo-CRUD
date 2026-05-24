import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import {MaterialModule } from './material/material.module';
import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
