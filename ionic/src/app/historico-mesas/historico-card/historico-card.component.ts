import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-card',
  templateUrl: './historico-card.component.html',
  styleUrls: ['./historico-card.component.scss'],
})
export class HistoricoCardComponent implements OnInit {

    mesas = [
        {
            estabelecimento: "Estabelecimento 1",
            data: "01/01/01",
            total: "R$ 100,00",
        },
        {
            estabelecimento: "Estabelecimento 2",
            data: "02/02/02",
            total: "R$ 200,00",
        },
        {
            estabelecimento: "Estabelecimento 3",
            data: "03/03/03",
            total: "R$ 300,00",
        },
        {
            estabelecimento: "Estabelecimento 4",
            data: "04/04/04",
            total: "R$ 400,00",
        }
    ]

    detalhes = [
        {
            nome: "cliente 1",
            foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
            valor: "10,00"
        },
        {
            nome: "cliente 2",
            foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
            valor: "20,00"
        },
        {
            nome: "cliente 3",
            foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
            valor: "30,00"
        },
        {
            nome: "cliente 4",
            foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
            valor: "40,00"
        }
    ]

    constructor() { }


    ngOnInit() {

    }
  }
