import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../services/mesa/mesa.service';

@Component({
    selector: 'app-header-total-fechar',
    templateUrl: './header-total-fechar.component.html',
    styleUrls: ['./header-total-fechar.component.scss'],
})
export class HeaderTotalFecharComponent implements OnInit {

    preco: number;

    constructor(private mesaService: MesaService) { }

    ngOnInit() { }

    ionViewWillEnter(){
      this.mesaService.getContaTotal().subscribe( (res) => {
        console.log(res);
      });
    }

}
