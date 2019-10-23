import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { AlertController} from '@ionic/angular';
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
  @Output() pagamentoClicked = new EventEmitter<number>();
  @Output() nameUpdated = new EventEmitter<number>();

  configuracao:boolean=false;

  constructor(public alertController: AlertController,
              private pedidoService: PedidoService,
              private pessoaService: PessoaService) { }

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
  finalizandoPedidoPessoa(id) {
      this.pagamentoClicked.emit(id);
  }
  
  ionViewWillEnter() {
    
  }

  ngOnInit() {}
}