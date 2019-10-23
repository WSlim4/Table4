import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pessoas = [];

  constructor(
    public service: PessoaService,
    private storage: Storage
  ) {}

  getPessoa():void{
    console.log("Resgatando pessoas no Back");
    this.storage.get("mesa_id").then( (mesa_id) => {
      this.service.getPessoasMesa(mesa_id).subscribe( (res) => {
        this.pessoas = res;
        console.log(res);
        console.log(mesa_id);
      });
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
