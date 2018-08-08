import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from '../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private _url :string ="/assets/data/employees.json";

 constructor(private http :HttpClient) { }
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url)
                       .pipe(
                         catchError(this.errorHandler));
  }                   
  errorHandler(error:HttpErrorResponse){
    return  throwError(error.message||"server error")
  }
  
}
