import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  url: string = "http://localhost:8000/api/mesa";

  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(public http: HttpClient, /*private storage: Storage*/) { }

  createTable(estabelecimento: string):Observable<any> {
    return this.http.post(this.url, {
      'estabelecimento': estabelecimento,
    }, this.httpHeaders).pipe(map(res => res));
  }
}
