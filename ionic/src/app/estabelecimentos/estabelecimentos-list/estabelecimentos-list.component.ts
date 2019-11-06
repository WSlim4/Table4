import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-estabelecimentos-list',
    templateUrl: './estabelecimentos-list.component.html',
    styleUrls: ['./estabelecimentos-list.component.scss'],
})
export class EstabelecimentosListComponent implements OnInit {

    @Input() estabelecimentoInfo;
    @Output() estabelecimentoClicked = new EventEmitter<number>();


    constructor() { }

    mostrarDetalhe(id) {
        this.estabelecimentoClicked.emit(id);
    }

    ionViewWillEnter() {
        this.estabelecimentoInfo.distance;
    }

    ngOnInit() {
        console.log(this.estabelecimentoInfo.distance);
    }

}
