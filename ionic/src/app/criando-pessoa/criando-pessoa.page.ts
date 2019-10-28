import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
    selector: 'app-criando-pessoa',
    templateUrl: './criando-pessoa.page.html',
    styleUrls: ['./criando-pessoa.page.scss'],
})
export class CriandoPessoaPage implements OnInit {

    quantPessoas: number;
    pessoas = [];
    muitasPessoas: boolean = false;
    limPessoas = 21;
    numPessoas;

    constructor(private router: Router, private pessoaService: PessoaService, private storage: Storage) { }

    ngOnInit() {
        this.numPessoas = this.router.getCurrentNavigation().extras;
    }

    criaArray(quant) {
        this.pessoas = [];
        if (quant < this.limPessoas - this.numPessoas) {
            this.muitasPessoas = false;
            for (let i = 0; i < quant; i++) {
                this.pessoas.push('');
            }
            console.log(this.pessoas);
        }
        else {
            this.muitasPessoas = true;
        }
    }

    onSubmit(form) {
        console.log(form);
        this.storage.get("mesa_id").then((mesa_id) => {
            this.pessoaService.createPessoas(form.value, mesa_id, false).subscribe(
                (res) => {
                    console.log(res.data);
                    this.router.navigate(['tabs/tab2']).then(() => {
                        window.location.reload();
                    });
                },
                (error) => {
                    console.log(error);
                });
        });
    }
}
