import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-pedido-pessoa-card',
  templateUrl: './pedido-pessoa-card.component.html',
  styleUrls: ['./pedido-pessoa-card.component.scss'],
})
export class PedidoPessoaCardComponent implements OnInit {

  @Input() pessoa;
  @Output() configuracaoClicked = new EventEmitter<number>();

   configuracao:boolean=false;

  constructor(public alertController: AlertController) { }

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
    console.log("clicou");
  }

  async editandoPessoa(){
    const alert = await this.alertController.create({
       header: 'Editar nome usuário',
       message: 'Ao clicar em alterar você modificara o nome do usuário',
       inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Editar Nome',
        }],
       buttons: [
         {
           text: 'Cancelar',
           role: 'cancel',
           cssClass: 'secondary',
           handler: () => {
             console.log('Cancelado');
           }
         }, {
           text: 'Alterar',
           handler: () => {
             console.log('Confirmado Alteração');
           }
         }
       ]
     });

     await alert.present();
}
  ngOnInit() {}

}
