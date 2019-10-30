import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-historico-list',
    templateUrl: './historico-list.component.html',
    styleUrls: ['./historico-list.component.scss'],
})
export class HistoricoListComponent implements OnInit {

    @Input() mesaInfo;
    @Output() mesaClicked = new EventEmitter<number>();

    mesaId;

    constructor( private router: Router, private pessoaService: PessoaService) {
     }

    mostrarDetalhe(id) {
        this.mesaClicked.emit(id);
    }

    ngOnInit() {
        console.log(this.mesaInfo.id);
    }

}
