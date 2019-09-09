import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerenciarpessoas',
  templateUrl: './gerenciarpessoas.page.html',
  styleUrls: ['./gerenciarpessoas.page.scss'],
})
export class GerenciarpessoasPage implements OnInit {
  
  gerenciarPessoa: FormGroup;
  pessoas;
  

  constructor(
    public service: PessoaService,
    public formBuilder: FormBuilder) {
      this.gerenciarPessoa = this.formBuilder.group({
        nome: [null, [Validators.required]],
      });
    }

  createPessoa(form){
    console.log(form.value);
    this.service.createPessoa(form.value.nome).subscribe( (res) => { console.log(res); }, (error) => { console.log(error); })
  }

  getPessoa():void{
    console.log("Resgatando pessoas no Back");
    this.service.getPessoa().subscribe( (res) => { this.pessoas = res } );
  }

  deletePessoa(id) {
    this.service.deletePessoa(id).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(){ }

  ionViewWillEnter() {
    this.getPessoa();
  }

}
