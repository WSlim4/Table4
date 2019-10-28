import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.page.html',
  styleUrls: ['./pagamento-lista.page.scss'],
})
export class PagamentoListaPage implements OnInit {

  pessoas = [];

  constructor(private pessoaService: PessoaService, private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pessoas = [];
    let people = [];
    this.storage.get("mesa_id").then( (mesa_id) => {
      this.pessoaService.getPessoasMesa(mesa_id).subscribe( (res) => {
        res.forEach(function (item) {
            if(!item.pago) {
                people.push(item);
            }
        });
        this.pessoas = people;
      },
      (error) => {
          console.log(error);
      });
  });
  }

  mostrarDetalhe(id){
    console.log(id);
    this.router.navigate(['pagamento-info'], id);
  }

}
