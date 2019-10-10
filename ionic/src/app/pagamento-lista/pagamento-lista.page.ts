import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.page.html',
  styleUrls: ['./pagamento-lista.page.scss'],
})
export class PagamentoListaPage implements OnInit {

  pessoas = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pessoas = [];
    this.pessoaService.getPessoa().subscribe( (res) => {
      console.log(res);
      this.pessoas = res;
    },
    (error) => {
        console.log(error);
    });
  }

}
