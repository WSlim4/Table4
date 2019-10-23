import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PedidoService } from '../../services/pedido/pedido.service';


@Component({
  selector: 'app-pedido-pessoa-card',
  templateUrl: './pedido-pessoa-card.component.html',
  styleUrls: ['./pedido-pessoa-card.component.scss'],
})
export class PedidoPessoaCardComponent implements OnInit {

  @Input() pessoa;
  @Output() configuracaoClicked = new EventEmitter<number>();
  pedidos;

  configuracao:boolean=false;

  constructor(private pedidoService: PedidoService) { }

  async dropdownConfiguracao(id){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.pedidoService.getPedidosPessoa(id).subscribe( (res) => {
        this.pedidos = res;
      });
      console.log(this.pedidos);
      this.configuracao=true;
    }
  }
  
  ionViewWillEnter() {
    
  }

  ngOnInit() {}
}