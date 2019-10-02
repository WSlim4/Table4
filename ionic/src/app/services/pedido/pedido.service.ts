import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  url:string = "http://localhost:8000/api/pedido";

  constructor(public http: HttpClient) { }

  postPedido(nome: string, quantidade: number, preco: number, pessoa_id: number): Observable<any> {
    return this.http.post(this.url, {
      'nome': nome,
      'preco': preco,
      'quantidade': quantidade,
      'pessoa_id': pessoa_id,

    }, this.httpHeaders).pipe(map(res => res));
  }

  putPedido(nome: string, quantidade: number, preco: number, pessoa_id: number): Observable<any> {
    return this.http.put(this.url, {
      'nome': nome,
      'preco': preco,
      'quantidade': quantidade,
      'pessoa_id': pessoa_id,

    }, this.httpHeaders).pipe(map(res => res));
  }
  getPedido():Observable<any>{
    return this.http.get(this.url, this.httpHeaders).pipe(map(res => res));
  }

  deletePedido(id: any):Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }


}
