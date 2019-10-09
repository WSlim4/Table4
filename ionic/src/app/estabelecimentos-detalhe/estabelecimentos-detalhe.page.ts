import { Component, OnInit } from '@angular/core';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';

@Component({
    selector: 'app-estabelecimentos-detalhe',
    templateUrl: './estabelecimentos-detalhe.page.html',
    styleUrls: ['./estabelecimentos-detalhe.page.scss'],
})
export class EstabelecimentosDetalhePage implements OnInit {

    estabelecimentoDetalhe: any[];

    constructor(public estabelecimentosService: EstabelecimentosService) { }

    getEstabelecimento(): void {
        this.estabelecimentoDetalhe = this.estabelecimentosService.getEstabelecimento();
        console.log("getEstabelecimento");
        console.log(this.estabelecimentoDetalhe);
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.getEstabelecimento();
        console.log("ionViewDidEnter");
        console.log(this.estabelecimentoDetalhe);
    }

}
