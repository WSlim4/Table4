import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-editando-pedido-modal',
  templateUrl: './editando-pedido-modal.page.html',
  styleUrls: ['./editando-pedido-modal.page.scss'],
})
export class EditandoPedidoModalPage {
private editandoPedidoForm: FormGroup;


@Input() preco;
@Input() id;
@Input() quantidade;
@Input() nome;
mesaId;
pessoas;
toggle: boolean = false;
masterChecked: boolean;
isIndeterminate: boolean;

  constructor(public viewCtrl: ModalController,
    public AlterandoPedido: PedidoService,
    private editandoPedido: FormBuilder,
    private storage: Storage,
    private pessoaService: PessoaService) {

      this.editandoPedidoForm = this.editandoPedido.group({
        nome: [null, [Validators.required]],
        valor: [null, [Validators.required]],
        quantidade: [null, [Validators.required]],
        pessoa_id: [null, [Validators.required]],
      });
      this.mesaId = this.storage.get('mesa_id');
  }

  getPessoa(){
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

  changeToggle() {
      this.toggle = !this.toggle;
  }

  SalvarMudanca(){
    this.viewCtrl.dismiss({
        'dismissed': true
      });
  }

  ngOnInit() {
    this.getPessoa();
  }

  checkMaster() {
      setTimeout(() => {
          this.pessoas.forEach(obj => {
              obj.checked = this.masterChecked;
          });
      });
  }

  checkEvent() {
      const totalItems = this.pessoas.length;
      let checked = 0;
      //checa quantas pessoas foram selecionadas
      this.pessoas.map(obj => {
          if (obj.checked) checked++;
      });
      if (checked > 0 && checked < totalItems) {
          //se pelo menos uma foi selecionada (mas não todas)
          this.isIndeterminate = true;
          this.masterChecked = false;
      } else if (checked == totalItems) {
          //se todas foram selecionada
          this.masterChecked = true;
          this.isIndeterminate = false;
      } else {
          //se nenhuma foi selecionada
          this.isIndeterminate = false;
          this.masterChecked = false;
      }
  }

}
