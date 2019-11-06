import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, SERVER_URL } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EstabelecimentosService {

    url: string = SERVER_URL + 'estabelecimento';
    estabelecimentos: any[];

    constructor(public http: HttpClient) { }

    getEstabelecimentos(): Observable<any> {
        return this.http.get(SERVER_URL + 'estabelecimento/').pipe(map(res => res));
    }

    getEstabelecimento(id: number): Observable<any> {
        return this.http.get(SERVER_URL + 'estabelecimento/' + id).pipe(map(res => res));
    }

    getEstabelecimentosProximos(user_latitude: number, user_longitude: number): Observable<any> {
        return this.http.post(SERVER_URL + 'estabelecimentosProximos', {
            'user_latitude': user_latitude,
            'user_longitude': user_longitude
        }).pipe(map(res => res));
    }
}
