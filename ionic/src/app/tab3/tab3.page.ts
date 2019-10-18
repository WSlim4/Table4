import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PedidoService } from '../services/pedido/pedido.service';
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

  ionViewWillEnter(){
    this.storage.get("mesa_id").then( (mesa_id) => {
      this.pedidoService.getPedidosMesa(mesa_id).subscribe( (res) => {
        this.pedidos = res;
        console.log(res);
        if(this.pedidos.length == 0){
          this.pedidosVazio = true;
        }
        else{
          this.pedidosVazio = false;
        }
      });
    });
  }

  }
