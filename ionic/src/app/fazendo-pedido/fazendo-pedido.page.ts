import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../services/pedido/pedido.service'; 

@Component({
  selector: 'app-fazendo-pedido',
  templateUrl: './fazendo-pedido.page.html',
  styleUrls: ['./fazendo-pedido.page.scss'],
})
export class FazendoPedidoPage implements OnInit {

  fazPedidoForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private PedidoService: PedidoService) {
    this.fazPedidoForm = this.formBuilder.group({
       nome: [null,[Validators.required]],
       valor: [null,[Validators.required]],
       quantidade: [null,[Validators.required]],
       pessoa_id: [null,[Validators.required]],
    });
   }

  ngOnInit() {
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
