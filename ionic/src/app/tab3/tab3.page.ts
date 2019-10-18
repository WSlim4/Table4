import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import {PedidoService} from '../services/pedido/pedido.service';
import { EditandoPedidoModalPage } from './editando-pedido-modal/editando-pedido-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

constructor(private pedidoService: PedidoService, public modalController: ModalController, private storage: Storage) { }

  pedidos = [];
  pedidosVazio = true;

  async goToConfiguracaoPedidoModal(id){
     console.log('Mostrar Modal',id);
     const modal = await this.modalController.create({
       component: EditandoPedidoModalPage
     });
     return await modal.present();

   }


  ionViewWillEnter(){
    this.storage.get("mesa_id").then( (mesa_id) => {
      this.pedidoService.getPedidosMesa(mesa_id).subscribe( (res) => {
        console.log(res);
        this.pedidos = res;
      },
      (error) => {
          console.log(error);
      });
    });
      if(this.pedidos.length == 0){
        this.pedidosVazio = true;
      }
      else{
        this.pedidosVazio = false;
      }
  }

  }
