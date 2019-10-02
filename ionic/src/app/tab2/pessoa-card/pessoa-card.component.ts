import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa-card',
  templateUrl: './pessoa-card.component.html',
  styleUrls: ['./pessoa-card.component.scss'],
})
export class PessoaCardComponent implements OnInit {

  constructor() { }

  @Input() pessoa;
  @Output() configuracaoClicked = new EventEmitter<number>();

  configuracao:boolean=false;

  ngOnInit() {}

  async dropdownConfiguracao(){
    if (this.configuracao){
      this.configuracao=false;
    }else{
      this.configuracao=true;
    }
  }

}
