import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import { PedidoService } from '../services/pedido/pedido.service';
//import { EditandoPedidoModalPage } from './editando-pedido-modal/editando-pedido-modal.page';
import { Storage } from '@ionic/storage';
import { EditandoPedidoModalComponent } from './editando-pedido-modal/editando-pedido-modal.component';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(private pedidoService: PedidoService, public modalController: ModalController, private storage: Storage) { }

    pedidos = [];
    pedidosVazio = false;
    loading = true;
    editPedido;

    ionViewWillEnter() {
        this.atualizarPedidos();
    }

    getPedidos() {
        this.storage.get("mesa_id").then((mesa_id) => {
            this.pedidoService.getPedidosMesa(mesa_id).subscribe((res) => {
                console.log(res);
                this.pedidos = res;
                if (this.pedidos.length == 0) {
                    this.pedidosVazio = true;
                    this.loading = false;
                }
                else {
                    this.pedidosVazio = false;
                    this.loading = false;
                }
            },
                (error) => {
                    console.log(error);
                });
        });
    }

    deletePedido(id) {
        console.log(id);
        this.pedidoService.deletePedido(id).subscribe(
            (res) => {
                console.log(res);
            }
        );
    }

    atualizarPedidos() {
        this.getPedidos();
    }



    ionViewDidEnter() {
        this.atualizarPedidos();
    }

}
