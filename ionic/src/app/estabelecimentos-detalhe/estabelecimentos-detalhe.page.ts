import { Component, OnInit } from '@angular/core';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-estabelecimentos-detalhe',
    templateUrl: './estabelecimentos-detalhe.page.html',
    styleUrls: ['./estabelecimentos-detalhe.page.scss'],
})
export class EstabelecimentosDetalhePage implements OnInit {

    estabelecimentoDetalhe: any[];
    estabelecimentoId;

    constructor(private estabelecimentosService: EstabelecimentosService, private router: Router) {
        // this.estabelecimentoId = this.router.getCurrentNavigation().extras;
    }

    getEstabelecimento(): void {
        this.estabelecimentoDetalhe = this.estabelecimentosService.getEstabelecimento();
        console.log("getEstabelecimento");
        console.log(this.estabelecimentoDetalhe);
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        // this.estabelecimentosService.getEstabelecimento(this.estabelecimentoId).subscribe((res) => {
        //     this.estabelecimentoDetalhe = res;
        //     console.log(this.estabelecimentoDetalhe);
        // });
    }

    ionViewDidEnter() {
        this.getEstabelecimento();
        console.log("ionViewDidEnter");
        console.log(this.estabelecimentoDetalhe);
    }

}
