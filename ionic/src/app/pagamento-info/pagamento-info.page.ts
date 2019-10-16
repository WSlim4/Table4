import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-info',
  templateUrl: './pagamento-info.page.html',
  styleUrls: ['./pagamento-info.page.scss'],
})
export class PagamentoInfoPage implements OnInit {

    pedidos = [
      {
        nome: 'Batata Frita',
        valor: '15,00'
      },
      {
        nome: 'Rolinho a primavera com molho picante',
        valor: '45,00'
      }
    ];
    taxa;
    total;
    totalNovo;
    pessoaId;
    pessoa;

  constructor(private pessoaService: PessoaService, private router: Router) { 
    this.pessoaId = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
    this.pessoaService.getPessoa(this.pessoaId).subscribe( (res) => {
      this.pessoa = res;
      console.log(this.pessoa);
    });
  }

  ionViewWillEnter(){
    //Recebe o total da conta
    this.total = 60;

    //Taxa padrão é 10%
    this.taxa = 10;

    //Calcula o total com a taxa
    this.calculaTotal(this.taxa);
  }

  //Função que calcula o total do pagamento incluindo a taxa de servço que o usuário escolheu
  calculaTotal(taxa){
    let porcentagem = (this.total * taxa)/100;
    this.totalNovo = this.total + porcentagem;
  }

}
