import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../services/pedido/pedido.service';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-fazendo-pedido',
  templateUrl: './fazendo-pedido.page.html',
  styleUrls: ['./fazendo-pedido.page.scss'],
})
export class FazendoPedidoPage {
  pessoas;
  show: boolean;
  checked: boolean;

  fazPedidoForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private PedidoService: PedidoService, private PessoaService: PessoaService) {
    this.fazPedidoForm = this.formBuilder.group({
       nome: [null,[Validators.required]],
       valor: [null,[Validators.required]],
       quantidade: [null,[Validators.required]],
       pessoa_id: [null,[Validators.required]],
    });
   }

  changeChecked(index) {

    this.pessoas[index].checked = !this.pessoas[index].checked
    console.log(this.pessoas[index].checked)
}

  getPessoa():void{
    console.log("Resgatando pessoas no Back");
    this.PessoaService.getPessoa().subscribe( (res) => {
       this.pessoas = res;
       for(let pessoa of this.pessoas) {
        pessoa['checked'] = false;
    } } );
  }

  ionViewWillEnter() {
    this.getPessoa();
  }

  fazPedido(form){
    console.log(form.value);
    this.PedidoService.postPedido(form.value.nome, form.value.quantidade,
      form.value.valor, 1).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
  }

}
