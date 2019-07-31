import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url:string = "http://localhost:8000/api/listaPessoa";

  constructor(
    public http: HttpClient 
  ) { }
  
  getPessoa () :Observable<any>{
    return this.http.get(this.url, httpOptions).pipe(map(res => res));
  }
}
