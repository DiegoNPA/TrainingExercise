import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Repo } from '../models/Repo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  apiUrl = "https://api.github.com/users";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  getRepos(userLogin): Observable<Repo[]>{
    return this.http.get<Repo[]>(this.apiUrl+`/${userLogin}/repos`);
  }
}
