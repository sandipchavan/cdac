import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }


  login():Observable<any>{
    return this._http.post<any>('http://localhost:8000/api/login',{'email':'alejandra39@example.org','password':'shout123'});
  }

  feeds():Observable<any>{
    return this._http.get<any>('http://localhost:8000/api/all');
  }
  isUserLoggedIn():boolean{
    return (localStorage.getItem('access_token')===null) ? false : true;
  }
}
