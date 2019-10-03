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
  toggle: boolean = false;
  consumidores = [];

  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private PedidoService: PedidoService, private PessoaService: PessoaService) {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      quantidade: [null, [Validators.required]],
      pessoa_id: [null, [Validators.required]],
    });
  }

  changeChecked(index) {
    this.pessoas[index].checked = !this.pessoas[index].checked;
    console.log(this.pessoas[index].checked);
  }

  getPessoa(): void {
    console.log("Resgatando pessoas no Back");
    this.PessoaService.getPessoa().subscribe((res) => {
      this.pessoas = res;
      console.log(this.pessoas);
      for (let pessoa of this.pessoas) {
        pessoa['checked'] = false;
      }
    });
  }

  ionViewWillEnter() {
    this.getPessoa();
    this.consumidores = [];
  }

  onSubmit(form) {
    console.log(form);
    this.consumidores = [];
    for (let i = 0; i < this.pessoas.length; i++) {
      if (this.pessoas[i].checked) {
        this.consumidores.push(this.pessoas[i]);
      }
    }
    let preco = form.value.quantidade * form.value.valor;
    if (!this.toggle) {
      let dividido = preco / this.consumidores.length;
      for (let i = 0; i < this.consumidores.length; i++) {
        this.consumidores[i].preco = dividido;
      }
      //Chamar a função da service
      console.log(this.consumidores);
    }
    else {
      let soma = 0;
      for (let i = 0; i < this.consumidores.length; i++) {
        let peso = 'peso' + (i + 1);
        this.consumidores[i].preco = form.value[peso];
        soma += form.value[peso];
      }
      if (soma == preco) {
        //Chamar a função da Service
        console.log("Yay");
      }
      else {
        //Criar um toast
        console.log("Vai calcular de novoooo");
      }
      // console.log(this.consumidores);
    }
    /*this.PedidoService.postPedido(form.value.nome, form.value.quantidade,
      form.value.valor, 1).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );*/
  }

}
