import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment, SERVER_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = SERVER_URL + 'user';

  private httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  createUser(email: string): Observable<any> {
    return this.http.post(this.url, {
        'email': email
    }, this.httpHeaders).pipe(map(res => res));
}
}
