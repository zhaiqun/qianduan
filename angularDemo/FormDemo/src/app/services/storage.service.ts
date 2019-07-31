import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setJsonObj(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }

  getJsonObj(key:string){

   return  JSON.parse(localStorage.getItem(key)) 
  }
}
