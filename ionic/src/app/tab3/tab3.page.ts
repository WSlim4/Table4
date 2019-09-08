import { Component } from '@angular/core';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pedidos = [
    {id:1, nome:'Cerveja', valor:'10'},
    {id:2, nome:'Batata Frita com Katshup e Salça com frango', valor:'10'},
    {id:3, nome:'Palavra Enoooooooooooooooooooooooooooooorme', valor:'10'},
    {id:4, nome:'Hamburguer', valor:'10'},
    {id:5, nome:'Amendoim', valor:'10'}
  ]
  constructor(public alertController: AlertController) {}
  
    async dropdownConfiguracao(){
      $(document).ready(function() {
        $('#lista_configuracao-pedido').hide();
        });
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
        message: 'Tem certeza que gostaria de finaçozar pedido?.',
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
  }
