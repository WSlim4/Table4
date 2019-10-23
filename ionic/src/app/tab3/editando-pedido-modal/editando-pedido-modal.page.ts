import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-editando-pedido-modal',
  templateUrl: './editando-pedido-modal.page.html',
  styleUrls: ['./editando-pedido-modal.page.scss'],
})
export class EditandoPedidoModalPage implements OnInit {
private editandoPedidoForm: FormGroup;


@Input() preco;
@Input() id;
@Input() quantidade;
@Input() nome;
mesaId;
pessoas;

  constructor(public viewCtrl: ModalController, public AlterandoPedido: PedidoService, private editandoPedido: FormBuilder, private storage: Storage, private pessoaService: PessoaService) {

    this.editandoPedidoForm = this.editandoPedido.group({
      nome: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      quantidade: [null, [Validators.required]],
      pessoa_id: [null, [Validators.required]],
    });
    this.mesaId = this.storage.get('mesa_id');

  }
  getPessoa(): void {
      console.log("Resgatando pessoas no Back");
      this.storage.get("mesa_id").then( (mesa_id) => {
          this.pessoaService.getPessoasMesa(mesa_id).subscribe( (res) => {
              this.pessoas = res;
              console.log(this.pessoas);
              for (let pessoa of this.pessoas) {
                  pessoa['checked'] = false;
              }
          });
        });
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
    this.getPessoa();
  }

}
