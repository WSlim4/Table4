import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ EditandoPedidoModalPage } from '../editando-pedido-modal/editando-pedido-modal.page';
import { PedidoService } from '../../services/pedido/pedido.service';




@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss'],
})
export class PedidoCardComponent implements OnInit {

  @Input() pedido;
  @Output() configuracaoClicked = new EventEmitter<number>();
@Output() nameUpdated = new EventEmitter<number>();

  configuracao:boolean=false;

  constructor(public modalController: ModalController, private pedidoService: PedidoService) {}

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

    // async deletandoPedido(id){
    //     console.log(id);
    //     this.pedidoService.deletePedido(id).subscribe( (res) =>{
    //         console.log(res);
    //     });
    // }

    deletarPedido(id) {
        console.log(id);
        this.pedidoService.deletePedido(id).subscribe(
            (res) => {
                this.nameUpdated.emit();
                console.log(res);
            },
            (error) => {
                console.log(error);
            }
        );
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
