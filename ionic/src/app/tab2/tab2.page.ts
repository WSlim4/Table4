import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { PedidoService } from '../services/pedido/pedido.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    pessoas = [];
    pessoasQuePagaram = [];
    mesaId;
    href;

    constructor(
        public pessoaService: PessoaService,
        public pedidoService: PedidoService,
        private storage: Storage,
        private router: Router
    ) { }

    getPessoas(){
        this.pessoas = [];
        let people = [];
        let peoplePaid = [];
        console.log("Resgatando pessoas no Back");
        this.storage.get("mesa_id").then((mesa_id) => {
            this.pessoaService.getPessoasPedidos(mesa_id).subscribe((res) => {
                res.forEach(function (item) {
                    if(!item.pago) {
                        people.push(item);
                    }
                    else {
                      peoplePaid.push(item);
                    }
                });
                this.pessoas = people;
                this.pessoasQuePagaram = peoplePaid;
                console.log(mesa_id);
                console.log(this.pessoasQuePagaram);
            });
        });
    }

    atualizarPessoas() {
        this.getPessoas();
    }

    pagamento(id) {
        console.log(id);
        this.router.navigate(['pagamento-info'], id);
    }

    numPessoas(numPessoas) {
        this.router.navigate(['criando-pessoa'], numPessoas);
    }

    ngOnInit() {
    this.mesaId = this.router.getCurrentNavigation().extras;

}

    ionViewDidEnter() {
        this.atualizarPessoas();
    }

}
