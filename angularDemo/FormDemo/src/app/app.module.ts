import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  {FormsModule} from '@angular/forms'

import {StorageService}  from './services/storage.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
