import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EstabelecimentosService {

    estabelecimentos: any[];

    constructor() { }

    setEstabelecimento(id, estabelecimentos) {
        this.estabelecimentos = estabelecimentos[id];
        console.log(this.estabelecimentos);
    }

    getEstabelecimento() {
        return this.estabelecimentos;
    }
}
