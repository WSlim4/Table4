import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import {PedidoService} from '../services/pedido/pedido.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

constructor(private pedidoService: PedidoService, public modalController: ModalController) { }

  pedidos = [];
  pedidosVazio = true;




  ionViewWillEnter(){
    this.pedidoService.getPedido().subscribe( (res) => {
      this.pedidos = res;
      console.log(res);
      if(this.pedidos.length == 0){
        this.pedidosVazio = true;
      }
      else{
        this.pedidosVazio = false;
      }
    });
  }

  }
