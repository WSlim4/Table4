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

  url:string = "http://localhost:8000/api/";

  constructor(
    public http: HttpClient 
  ) { }
  
  getPessoa () :Observable<any>{
    return this.http.get(this.url + "listaPessoa", httpOptions).pipe(map(res => res));
  }

  deletePessoa (id: any) :Observable<any>{
    return this.http.delete(this.url + "deletaPessoa/" + id);
  }
}
