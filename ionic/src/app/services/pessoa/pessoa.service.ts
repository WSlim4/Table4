import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  url:string = "http://localhost:8000/api/pessoa";

  constructor(
    public http: HttpClient
  ) { }

  getPessoa():Observable<any>{
    return this.http.get(this.url, this.httpHeaders).pipe(map(res => res));
  }

  deletePessoa(id: any):Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }

  createPessoa(nome: string): Observable<any> {
    return this.http.post(this.url, {
      'nome': nome,
    }, this.httpHeaders).pipe(map(res => res));
  }


}
