import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-historico-list',
    templateUrl: './historico-list.component.html',
    styleUrls: ['./historico-list.component.scss'],
})
export class HistoricoListComponent implements OnInit {

    @Input() mesaInfo;
    @Output() mesaClicked = new EventEmitter<number>();

    constructor() { }

    mostrarDetalhe(id) {
        this.mesaClicked.emit(id);
    }

    ngOnInit() {
        console.log(this.mesaInfo.id);
    }

}
