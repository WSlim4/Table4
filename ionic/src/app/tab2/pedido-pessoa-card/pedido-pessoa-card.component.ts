import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-pedido-pessoa-card',
  templateUrl: './pedido-pessoa-card.component.html',
  styleUrls: ['./pedido-pessoa-card.component.scss'],
})
export class PedidoPessoaCardComponent implements OnInit {

  @Input() pessoa;
  @Output() configuracaoClicked = new EventEmitter<number>();
  @Output() pagamentoClicked = new EventEmitter<number>();
  @Output() nameUpdated = new EventEmitter<number>();

   configuracao:boolean=false;

  constructor(public alertController: AlertController, private pessoaService: PessoaService) { }

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
    console.log("clicou");
    console.log(this.pessoa);
  }

  finalizandoPedidoPessoa(id) {
      this.pagamentoClicked.emit(id);
  }

  async editandoPessoa(){
    const alert = await this.alertController.create({
       header: 'Editar nome usuário',
       message: 'Ao clicar em alterar você modificara o nome do usuário',
       inputs: [
        {
          name: 'name1',
          type: 'text',
          value: this.pessoa.nome,
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
           handler: (data) => {
             this.pessoaService.updatePessoa(data.name1, this.pessoa.id).subscribe(
                 (res) => {
                     this.nameUpdated.emit();
                     console.log(res);
                 },
                 (error) => {
                     console.log(error);
                 }
             );
             console.log('Confirmado Alteração');
           }
         }
       ]
     });

     await alert.present();
}

deletarPessoa(id) {
    console.log(id);
    this.pessoaService.deletePessoa(id).subscribe(
        (res) => {
            this.nameUpdated.emit();
            console.log(res);
        },
        (error) => {
            console.log(error);
        }
    );
}

  ngOnInit() {}

}