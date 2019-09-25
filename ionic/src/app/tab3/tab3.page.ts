import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import {PedidoService} from '../services/pedido/pedido.service';
import { EditandoPedidoModalPage } from './editando-pedido-modal/editando-pedido-modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

constructor(private pedidoService: PedidoService, public modalController: ModalController) { }

  pedidos = [];

  async goToConfiguracaoPedidoModal(id){
     console.log('Mostrar Modal',id);
     const modal = await this.modalController.create({
       component: EditandoPedidoModalPage
     });
     return await modal.present();

   }


  ionViewWillEnter(){
    this.pedidoService.getPedido().subscribe( (res) => {
      this.pedidos = res;
      console.log(res);
    });
  }

  }
