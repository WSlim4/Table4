import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import{EditandoPedidoModalPage} from '../editando-pedido-modal/editando-pedido-modal.page';




@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss'],
})
export class PedidoCardComponent implements OnInit {

  @Input() pedido;
  @Output() configuracaoClicked = new EventEmitter<number>();

  configuracao:boolean=false;

  constructor(public modalController: ModalController) {}

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
    console.log("clicou");
  }

    async editandoPedido(){
     this.goToConfiguracaoPedidoModal();
    }

    async goToConfiguracaoPedidoModal(){
      console.log(this.pedido);
       const modal = await this.modalController.create({
         component: EditandoPedidoModalPage,
         componentProps:{
           id:this.pedido.id,
           quantidade: this.pedido.quantidade,
           preco: this.pedido.preco,
           nome:this.pedido.nome
                }
       });
       return await modal.present();

     }

  ngOnInit() {

  }

  ionViewDidEnter(){
    console.log(this.pedido[0]);
  }


}
