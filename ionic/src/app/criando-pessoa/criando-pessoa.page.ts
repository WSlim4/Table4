import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criando-pessoa',
  templateUrl: './criando-pessoa.page.html',
  styleUrls: ['./criando-pessoa.page.scss'],
})
export class CriandoPessoaPage implements OnInit {
  
  quantPessoas: number;
  pessoas = [];
  muitasPessoas: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  criaArray(quant){
    this.pessoas=[];
    if(quant < 21){
      this.muitasPessoas = false;
      for( let i=0; i < quant; i++){
        this.pessoas.push('');
      }
      console.log(this.pessoas);
    }
    else{
      this.muitasPessoas = true;
    }
  }

}
