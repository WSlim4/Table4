import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment, SERVER_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  url:string = SERVER_URL + 'pedido';

  constructor(public http: HttpClient) { }

  postPedido(nome: string, quantidade: number, preco: number, mesa_id: number, dividindo: any): Observable<any> {
      console.log({
        'nome': nome,
        'preco': preco,
        'quantidade': quantidade,
        'mesa_id': mesa_id,
        'dividindo': dividindo
      });
    return this.http.post(this.url, {
      'nome': nome,
      'preco': preco,
      'quantidade': quantidade,
      'mesa_id': mesa_id,
      'dividindo': dividindo

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
  // getPedido():Observable<any>{
  //   return this.http.get(this.url, this.httpHeaders).pipe(map(res => res));
  // }

  getPedidosMesa(mesa_id: number):Observable<any>{
    return this.http.get(SERVER_URL + 'pedidosMesa/' + mesa_id, this.httpHeaders).pipe(map(res => res));
  }

  getPedidosPessoa(pessoa_id: number):Observable<any>{
    return this.http.get(this.url + '/' + pessoa_id, this.httpHeaders).pipe(map(res => res));
  }

  deletePedido(pedido_id: number):Observable<any>{
    return this.http.delete(this.url + '/' + pedido_id);
  }


}
