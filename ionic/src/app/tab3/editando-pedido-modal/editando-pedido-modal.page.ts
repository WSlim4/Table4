
import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PedidoService} from '../../services/pedido/pedido.service';
import {FormBuilder, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-editando-pedido-modal',
  templateUrl: './editando-pedido-modal.page.html',
  styleUrls: ['./editando-pedido-modal.page.scss'],
})
export class EditandoPedidoModalPage implements OnInit {
private editandoPedidoForm: FormGroup;

@Input() preco
@Input() id
@Input() quantidade
@Input() nome


  constructor(public viewCtrl: ModalController, public AlterandoPedido: PedidoService, private editandoPedido: FormBuilder) {

    this.editandoPedidoForm = this.editandoPedido.group({
       nome: [this.nome],
       quantidade: [this.quantidade],
       preco:[this.preco]
    })

  }



fecharModal() {
this.viewCtrl.dismiss();
}

SalvarMudanca(){
  this.viewCtrl.dismiss({
      'dismissed': true
    });
}
  ngOnInit() {
  }

}
