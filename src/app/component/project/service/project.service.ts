import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'; 

@Injectable()
export class ProjectService {
  private requestUrl = environment.requestUrl + '/api/project'; // URL to Web API
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json;charset=UTF-8'})
  };
  constructor(private http:HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get(environment.requestUrl + '/apis/project/all').pipe(
      tap((res: any)=>{  
       return res;
      }),
      catchError(this.handleError<any>('Project'))
    );
  }

  getProject(project_id: any): Observable<any>{ 
    return this.http.get(environment.requestUrl + '/apis/project/' + project_id, this.httpOptions).pipe(
      tap((res :any)=>{ 
       return res;
      }),
      catchError(this.handleError<any>('Project'))
    );
  }

  getProjectView(project_id: string): Observable<String>{ 
    return this.http.get(this.requestUrl + '/' + project_id, this.httpOptions).pipe(
      tap((res :any)=>{
       return res;
      }),
      catchError(this.handleError<any>('Project'))
    );
  } 

  saveProject(value: any):Observable<{}>{ 
    return this.http.post(environment.requestUrl + '/apis/project/save_project', value, this.httpOptions).pipe(
      tap((res :any)=>{
       return res; 
      }),
      catchError(this.handleError<any>('Project'))
    );
  }
   
  deleteProject(project_id:number):Observable<any> {
    return this.http.delete(environment.requestUrl + `/apis/project/delete/`+ project_id, this.httpOptions).pipe(
      tap((res :any)=>{
       return res;
      }),
      catchError(this.handleError<any>('Project'))
    )
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error); 
      //this.messageService.add(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  } 
}

