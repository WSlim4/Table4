import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-gerenciarpessoas',
  templateUrl: './gerenciarpessoas.page.html',
  styleUrls: ['./gerenciarpessoas.page.scss'],
})
export class GerenciarpessoasPage implements OnInit {
  pessoas;

  constructor(
    public service: PessoaService
  ) {}

  getPessoa ():void{
    console.log(this.service + "Resgatando pessoas no Back")
    this.service.getPessoa().subscribe( (res) => { this.pessoas = res } )
  }

  deletePessoa( pessoa ) {

    this.service.deletePessoa( pessoa.id ).subscribe(
        (res) => {
            console.log(res);
        }
    );
}

  ngOnInit(){
    this.getPessoa()
  }

}
