import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../services/mesa/mesa.service';

import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-header-total-fechar',
    templateUrl: './header-total-fechar.component.html',
    styleUrls: ['./header-total-fechar.component.scss'],
})
export class HeaderTotalFecharComponent implements OnInit {

    preco: number;

    constructor(private mesaService: MesaService, private storage: Storage) { }

    ngOnInit() {
      this.storage.get("mesa_id").then( (data) => {
        this.mesaService.getContaTotal(data).subscribe( (res) => {
          this.preco = res.data;
        }, (error) => {
          console.log(error);
        });
      });
      
    }

}
