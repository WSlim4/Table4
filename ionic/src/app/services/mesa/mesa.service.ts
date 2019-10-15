import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, SERVER_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  url: string = SERVER_URL + 'mesa';
  mesaId;

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(public http: HttpClient) {
    
  }

  createTable(estabelecimento: string, moeda: string):Observable<any> {
    return this.http.post(this.url, {
      'estabelecimento': estabelecimento,
      'moeda': moeda
    }, this.httpHeaders).pipe(map(res => res));
  }

  getContaTotal(id: number):Observable<any> {
    return this.http.get(SERVER_URL + 'contasMesa/' + id).pipe(map(res => res));
  }
}
