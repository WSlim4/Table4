import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss'],
})
export class PedidoCardComponent implements OnInit {



  configuracao:boolean=false;

  constructor(public alertController: AlertController) {}

    async dropdownConfiguracao(){
      if (this.configuracao){
        this.configuracao=false;
      }else{
        this.configuracao=true;
      }
      console.log("clicou");
    }

    async editandoPedido(){
      const alert = await this.alertController.create({
        header:'Editar Item',
        subHeader:'Modifique os campos a baixo para modificar Item.',
        message: 'Caso queira mudar a pessoa que esta pedindo o item vá até a aba de Pessoas.',
        inputs:[
          {
            name: 'Nome',
            type: 'text',
            id:'lista_nome-pedido-editar',
            placeholder:' Pedido'
          },{
            name: 'Valor',
            type: 'number',
            placeholder:' Valor'
          }, {
              name: 'Quantidade',
              type: 'number',
              min:'0',
              max:'1000',
              placeholder:'Quantidade'
            },
        ],
        buttons:[
          {
            text:'Cancelar',
            role:'cancel',
            cssClass:'alert_editar-botao',
            handler:(confirmar_cancelamento) => {
              console.log('Confirmar cancelamento:blash');
            }
          },{
            text:'Concluir',
            handler:()=> {
              console.log('Confirmar conclusão');
            }
          }
        ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    }

    async pagandoPedido(){
      const alert = await this.alertController.create({
        header:'Finalizar Pedido',
        message: 'Tem certeza que gostaria de finalizar pedido?',
        buttons:[
          {
            text:'Não',
            role:'cancel',
            cssClass:'alert_editar-botao',
            handler:(confirmar_cancelamento) => {
              console.log('Confirmar cancelamento:blash');
            }
          },{
            text:'Sim',
            handler:()=> {
              console.log('Confirmar conclusão');
            }
          }
        ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    }


  ngOnInit() {}

}
