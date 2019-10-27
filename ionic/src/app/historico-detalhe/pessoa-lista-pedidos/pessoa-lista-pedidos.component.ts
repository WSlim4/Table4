import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-lista-pedidos',
  templateUrl: './pessoa-lista-pedidos.component.html',
  styleUrls: ['./pessoa-lista-pedidos.component.scss'],
})
export class PessoaListaPedidosComponent implements OnInit {

    @Input() pessoaInfo;

maisDetalhes:boolean=false;
  constructor() { }

  async dropdownDetalhes(){
    if (this.maisDetalhes){
      this.maisDetalhes=false;
    }else{
      this.maisDetalhes=true;
    }
    console.log("clicou");
  }

  ngOnInit() {}

}
