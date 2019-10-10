import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
