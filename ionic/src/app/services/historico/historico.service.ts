import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoricoService {

    mesas: any[];

    constructor() { }

    setMesa(id, mesas) {
        this.mesas = mesas[id];
        console.log(this.mesas);
    }

    getMesa() {
        return this.mesas;
    }
}
