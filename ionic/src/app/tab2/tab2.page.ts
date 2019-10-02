import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pessoas = [];

  constructor(
    public service: PessoaService
  ) {}

  getPessoa():void{
    console.log("Resgatando pessoas no Back")
    this.service.getPessoa().subscribe( (res) => {
      this.pessoas = res;
      console.log(res);
    });
  }

  deletePessoa(id) {
    console.log(id);
    this.service.deletePessoa(id).subscribe(
        (res) => {
            console.log(res);
        }
    );
}

  ngOnInit(){ }

  ionViewWillEnter() {
    this.getPessoa();
  }
}
