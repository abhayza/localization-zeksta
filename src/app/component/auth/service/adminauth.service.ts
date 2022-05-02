import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {

    private requestUrl = environment.requestUrl;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    constructor(private http: HttpClient) {
                
    }

    login(useremail: string, password: string, rememberme: boolean): Observable<string> {
        
        let now = new Date();
        let exp = new Date(now.getTime() + (6*60*60*1000)); 
        let user = {email:useremail, password: password, grant_type: 'password'};
        let url = this.requestUrl+'/admin/signin';
        
        return this.http.post<any>(url,JSON.stringify(user), this.httpOptions).pipe(
            tap((res: any) => { 
                const response = JSON.parse(JSON.stringify(res)); 
                let token = res && res.newToken;
                if (token) {
                    localStorage.setItem('bearerToken', res.newToken);
                    localStorage.setItem('adminUserSession', response);
                    if(rememberme)
                    {
                        localStorage.setItem('adminRememberMe', 'true');
                        localStorage.setItem('adminRememberEmail', useremail);
                    }
                    else
                    {
                        localStorage.removeItem('adminRememberMe');
                        localStorage.removeItem('adminRememberEmail');
                    }
                    return res;
                } else {
                    return res;
                }
            }),
            catchError(this.handleError<any>('Login'))
        );
    }
    logout(): void {
        if(!localStorage.getItem('adminRememberMe'))
        {
            localStorage.removeItem('adminRememberMe');
            localStorage.removeItem('adminRememberEmail');
        }
        localStorage.removeItem('adminUserSession');
        localStorage.removeItem('adminToken');
    }

    register(formObj: any):Observable<String>{
        return this.http.post(this.requestUrl + '/api/user/save_user', formObj , this.httpOptions).pipe(
            tap((res: any) => {
                return res; 
            }),
            catchError(this.handleError<any>('Login'))
        );
    } 

    
    getProfile(): Observable<any>{ 
        return this.http.get(this.requestUrl + '/apis/user/by_id', this.httpOptions).pipe(
          tap((res :any)=>{
           return res;
          }),
          catchError(this.handleError<any>('Project'))
        );
      }

    // sendReqEmail(email):Observable<String>{ 
    //     return this.http.post(this.requestUrl + '/admin/user/forgot_password', email , this.httpOptions).pipe(
    //         tap((res: any) => {
    //             return res; 
    //         }),
    //         catchError(this.handleError<any>('Login'))
    //     );
    // } 

    // resetPassword(value):Observable<any>{ 
    //     return this.http.post(this.requestUrl + '/admin/user/reset', value , this.httpOptions).pipe(
    //         tap((res: any) => {
    //             return res; 
    //         }),
    //         catchError(this.handleError<any>('Login'))
    //     );
    // }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {  
          console.error(error); 
          //this.messageService.add(`${operation} failed: ${error.message}`);
          return of(result as T);
        }
    }
}