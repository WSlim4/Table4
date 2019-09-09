import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../services/historico/historico.service';

@Component({
    selector: 'app-historico-detalhe',
    templateUrl: './historico-detalhe.page.html',
    styleUrls: ['./historico-detalhe.page.scss'],
})
export class HistoricoDetalhePage implements OnInit {

    mesaDetalhe: any[];

    constructor(public historicoService: HistoricoService) { }

    getMesa(): void {
        this.mesaDetalhe = this.historicoService.getMesa();
        console.log(this.mesaDetalhe);
    }
    ngOnInit() {
    }

    ionViewDidEnter() {
        this.getMesa();
        console.log(this.mesaDetalhe);
    }

}
