import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-fazendo-pedido',
  templateUrl: './fazendo-pedido.page.html',
  styleUrls: ['./fazendo-pedido.page.scss'],
})
export class FazendoPedidoPage implements OnInit {
  pessoas;
  show: boolean;
  checked: boolean;

  constructor(
    public service: PessoaService
  ) {}

  changeChecked(index) {
  
    this.pessoas[index].checked = !this.pessoas[index].checked
    console.log(this.pessoas[index].checked)
}

  getPessoa():void{
    console.log("Resgatando pessoas no Back");
    this.service.getPessoa().subscribe( (res) => {
       this.pessoas = res;
       for(let pessoa of this.pessoas) {
        pessoa['checked'] = false;
    } } );
  }
  
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPessoa();
  }

}
