import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import{ EditandoPedidoModalPage } from '../editando-pedido-modal/editando-pedido-modal.page';
import { PedidoService } from '../../services/pedido/pedido.service';
import { EditandoPedidoModalComponent } from '../editando-pedido-modal/editando-pedido-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss'],
})
export class PedidoCardComponent implements OnInit {

  @Input() pedido;
  @Output() configuracaoClicked = new EventEmitter<number>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() pedidoUpdated = new EventEmitter<number>();

  configuracao:boolean=false;

  constructor(private pedidoService: PedidoService, private modalController: ModalController) {}

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
    console.log("clicou");
  }

    async editarPedido(pedido) {
        console.log(pedido);
        const modal = await this.modalController.create({
            component: EditandoPedidoModalComponent,
            componentProps: {
                id: pedido.id,
                quantidade: pedido.quantidade,
                preco: pedido.preco,
                nome: pedido.nome
            }
        });
        modal.onDidDismiss().then((data) => {
        this.pedidoUpdated.emit();
    });
        return await modal.present();
    }

    deletarPedido(id) {
        console.log(id);
        this.pedidoService.deletePedido(id).subscribe(
            (res) => {
                this.pedidoUpdated.emit();
                console.log(res);
            },
            (error) => {
                console.log(error);
            }
        );
    }

  ngOnInit() { }

  ionViewDidEnter() { }

}
