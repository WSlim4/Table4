import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pessoas;

  constructor(
    public service: PessoaService 
  ) {}

  getPessoa ():void{
    console.log(this.service + "Resgatando pessoad no Back")
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
