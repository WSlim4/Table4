import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-historico-card',
    templateUrl: './historico-card.component.html',
    styleUrls: ['./historico-card.component.scss'],
})
export class HistoricoCardComponent implements OnInit {

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
