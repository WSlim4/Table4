import { Component, OnInit } from '@angular/core';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';
import { Router, NavigationExtras } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-estabelecimentos-detalhe',
    templateUrl: './estabelecimentos-detalhe.page.html',
    styleUrls: ['./estabelecimentos-detalhe.page.scss'],
})
export class EstabelecimentosDetalhePage implements OnInit {

    detalhe: any[];
    estabelecimentoId;
    estabelecimentoNome;
    instagram;

    constructor(private estabelecimentosService: EstabelecimentosService, private router: Router, private inAppBrowser: InAppBrowser) {
        this.estabelecimentoId = this.router.getCurrentNavigation().extras;
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.estabelecimentosService.getEstabelecimento(this.estabelecimentoId).subscribe((res) => {
            this.detalhe = res.data;
            this.estabelecimentoNome = res.data.name;
            console.log(this.detalhe);
            console.log(this.estabelecimentoNome);
        });
    }

    abrirInstagram() {
        this.instagram = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=com.instagram.android','_system',{location:'yes'});
    }

    abrirMesa() {
    let navigationExtras: NavigationExtras = {
      state: {
        nome: this.estabelecimentoNome
      }
    };
    this.router.navigate(['tutorial'], navigationExtras);
  }

}
