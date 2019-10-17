import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-pedido-pessoa-card',
  templateUrl: './pedido-pessoa-card.component.html',
  styleUrls: ['./pedido-pessoa-card.component.scss'],
})
export class PedidoPessoaCardComponent implements OnInit {

  @Input() pessoa;
  @Output() configuracaoClicked = new EventEmitter<number>();

   configuracao:boolean=false;

  constructor() { }

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
    console.log("clicou");
  }
  
  ngOnInit() {}

}
