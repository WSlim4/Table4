import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage implements OnInit {

  estabelecimentos: any[];

  constructor(public router: Router, public estabelecimentosService: EstabelecimentosService) { }

getEstabelecimentos() {
    this.estabelecimentosService.getEstabelecimentos().subscribe(
        (res) => {
            console.log(res);
            this.estabelecimentos = res;
        },
        (error) => {
           console.log(error);
        });
}

getEstabelecimentos() {
    // this.estabelecimentosService.getEstabelecimentos().subscribe(
    //     (res) => {
    //         console.log(res);
    //         this.estabelecimentos = res;
    //     },
    //     (error) => {
    //        console.log(error);
    //     });
}

  detalheEstabelecimento(id) {
      this.router.navigate(['estabelecimentos-detalhe'], id);
  }

  ionViewWillEnter() {
      this.estabelecimentos = [];
      this.getEstabelecimentos();
  }

  // detalheEstabelecimento(id) {
  //     this.router.navigate(['estabelecimentos-detalhe'], id);
  // }

  ionViewWillEnter() {
      // this.estabelecimentos = [];
      // this.getEstabelecimentos();
  }

  ngOnInit() {
  }

}
