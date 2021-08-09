import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registroUser } from '../model/registro';



@Injectable({
  providedIn: 'root'
})
export class PeticionService {

 

  header = new HttpHeaders().set("Content-type", "application/json");

  constructor( private http:HttpClient ) { }

  post( url:string, data:{}){
    let promise = new Promise((resolve, rejects) => {
      this.http.post(url, data, {headers: this.header})
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(res);
          }
        );
    });
    return promise;
  }

  get(url:string){
    let promise = new Promise((resolve, rejects) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(res);
          }
        );
    });
    return promise;
  }

  registerUser(registerParams:any){
    let params = JSON.stringify(registerParams);
    return this.http.post(
      "http://localhost:3007/api/registro",
      params,
      {headers: this.header}
    )
  }

  allUsers(){
    return this.http.get("http://localhost:3007/api/users", {headers: this.header})
  }
}

