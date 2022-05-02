import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'; 

@Injectable()
export class LanguageService {
  private requestUrl = environment.requestUrl + '/api/language'; // URL to Web API
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json;charset=UTF-8'})
  };
  constructor(private http:HttpClient) { }

  getLanguages():Observable<any>{
    return this.http.get(environment.requestUrl + '/apis/language/all').pipe(
      tap((res: any)=>{  
       return res;
      }),
      catchError(this.handleError<any>('Language'))
    );
  }

  getLanguage(language_id: any): Observable<any>{ 
    return this.http.get(environment.requestUrl + '/apis/language/' + language_id, this.httpOptions).pipe(
      tap((res :any)=>{ 
       return res;
      }),
      catchError(this.handleError<any>('Language'))
    );
  }

  getLanguageView(language_id: string): Observable<String>{ 
    return this.http.get(this.requestUrl + '/' + language_id, this.httpOptions).pipe(
      tap((res :any)=>{
       return res;
      }),
      catchError(this.handleError<any>('Language'))
    );
  } 

  saveLanguage(value: any):Observable<{}>{ 
    return this.http.post(environment.requestUrl + '/apis/language/save_language', value, this.httpOptions).pipe(
      tap((res :any)=>{
       return res; 
      }),
      catchError(this.handleError<any>('Language'))
    );
  }
   
  deleteLanguage(language_id:number):Observable<any> {
    return this.http.delete(environment.requestUrl + `/apis/language/delete/`+ language_id, this.httpOptions).pipe(
      tap((res :any)=>{
       return res;
      }),
      catchError(this.handleError<any>('Language'))
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

