import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../services/mesa/mesa.service';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { EventEmitterService } from "../../services/evento/event-emitter.service";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-header-total-fechar',
    templateUrl: './header-total-fechar.component.html',
    styleUrls: ['./header-total-fechar.component.scss'],
})
export class HeaderTotalFecharComponent implements OnInit {

    preco: number;
    pessoas;
    podeFechar: boolean = false;

    constructor(private router: Router, private pessoaService: PessoaService, private mesaService: MesaService, private storage: Storage) {
      EventEmitterService.get('dismiss').subscribe(this.atualizar);
    }

    ngOnInit() {
      this.calculaTotal();
    }

    calculaTotal(){
      this.preco = 0;
      let soma = 0;
      this.storage.get("mesa_id").then( (mesa_id) => {
        // this.mesaService.getContaTotal(mesa_id).subscribe( (res) => {
        //   this.preco = res.data;
        // }, (error) => {
        //   console.log(error);
        // });
        this.pessoas = [];
        let people = [];
        this.pessoaService.getPessoasMesa(mesa_id).subscribe((res) => {
          res.forEach(function (pessoa) {
              if(!pessoa.pago) {
                  people.push(pessoa);
                  soma = soma + pessoa.valorConta;
              }
          });
          this.preco = soma;
          this.pessoas = people;
          if(this.pessoas.length == 0){
            this.podeFechar = true;
          } else{
            this.podeFechar = false;
          }
        });
      });
    }

    atualizar(data){
      console.log(data);
      this.calculaTotal();
    }

    fechaMesa(){
      this.storage.remove("mesa_id").then ( () =>{
        console.log("Mesa foi finalizada.");
      });
      this.router.navigate(['/tabs/tab1']);
    }

}
