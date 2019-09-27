import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricoService } from '../services/historico/historico.service';

@Component({
    selector: 'app-historico-mesas',
    templateUrl: './historico-mesas.page.html',
    styleUrls: ['./historico-mesas.page.scss'],
})
export class HistoricoMesasPage implements OnInit {

    mesas: any[];

    constructor(public router: Router, public historicoService: HistoricoService) {
        this.mesas = [
            {
                id: 0,
                estabelecimento: "Estabelecimento 1",
                data: "01/01/01",
                total: "100,00",
                pedidos: [
                    {
                        pedido: "Batata frita",
                        valor: "10,00"
                    },
                    {
                        pedido: "Chá",
                        valor: "15,00"
                    },
                    {
                        pedido: "Picanha especial",
                        valor: "20,00"
                    }
                ],
                detalhes: [
                    {
                        nome: "Mario",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "10,00"
                    },
                    {
                        nome: "Jordy",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "20,00"
                    },
                    {
                        nome: "Bruna",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "30,00"
                    },
                    {
                        nome: "Fábio",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "40,00"
                    }
                ]
            },
            {
                id: 1,
                estabelecimento: "Estabelecimento 2",
                data: "02/02/02",
                total: "200,00",
                pedidos: [
                    {
                        pedido: "Batata frita",
                        valor: "20,00"
                    },
                    {
                        pedido: "Chá",
                        valor: "25,00"
                    },
                    {
                        pedido: "Picanha especial",
                        valor: "30,00"
                    }
                ],
                detalhes: [
                    {
                        nome: "cliente 2.1",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "10,00"
                    },
                    {
                        nome: "cliente 2.2",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "20,00"
                    },
                    {
                        nome: "cliente 2.3",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "30,00"
                    },
                    {
                        nome: "cliente 2.4",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "40,00"
                    }
                ]
            },
            {
                id: 2,
                estabelecimento: "Estabelecimento 3",
                data: "03/03/03",
                total: "300,00",
                pedidos: [
                    {
                        pedido: "Batata frita",
                        valor: "30,00"
                    },
                    {
                        pedido: "Chá",
                        valor: "35,00"
                    },
                    {
                        pedido: "Picanha especial",
                        valor: "40,00"
                    }
                ],
                detalhes: [
                    {
                        nome: "cliente 3.1",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "10,00"
                    },
                    {
                        nome: "cliente 3.2",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "20,00"
                    },
                    {
                        nome: "cliente 3.3",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "30,00"
                    },
                    {
                        nome: "cliente 3.4",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "40,00"
                    }
                ]
            },
            {
                id: 3,
                estabelecimento: "Estabelecimento 4",
                data: "04/04/04",
                total: "400,00",
                pedidos: [
                    {
                        pedido: "Batata frita",
                        valor: "40,00"
                    },
                    {
                        pedido: "Chá",
                        valor: "45,00"
                    },
                    {
                        pedido: "Picanha especial",
                        valor: "50,00"
                    }
                ],
                detalhes: [
                    {
                        nome: "cliente 4.1",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "10,00"
                    },
                    {
                        nome: "cliente 4.2",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "20,00"
                    },
                    {
                        nome: "cliente 4.3",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "30,00"
                    },
                    {
                        nome: "cliente 4.4",
                        foto: "https://image.flaticon.com/icons/svg/131/131040.svg",
                        valor: "40,00"
                    }
                ]
            },
        ]
    }

    detalheMesa(id) {
        this.historicoService.setMesa(id, this.mesas);
        this.router.navigate(['historico-detalhe'], id);
    }

    ngOnInit() {
        console.log(this.mesas);
    }

}
