import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';

@Component({
    selector: 'app-estabelecimentos',
    templateUrl: './estabelecimentos.page.html',
    styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage implements OnInit {

    estabelecimentos: any[];

    constructor(public router: Router, public estabelecimentosService: EstabelecimentosService) {
        this.estabelecimentos = [
            {
                id: 0,
                nome: "Outback",
                cozinha: "Steakhouse",
                distancia: "0,4",
                imagem: "https://logodownload.org/wp-content/uploads/2016/09/Outback-logo.png",
                endereco: "Av. Dom Hélder Câmara, 1111 - Cachambi, Rio de Janeiro",
                telefone: "(11) 1111-1111",
                funcionamento: [
                    {
                        dia: "Segunda",
                        hora: "Não abre"
                    },
                    {
                        dia: "Terça",
                        hora: "17:00 - 00:00",
                    },
                    {
                        dia: "Quarta",
                        hora: "Não abre"
                    },
                    {
                        dia: "Quinta",
                        hora: "17:00 - 00:00"
                    },
                    {
                        dia: "Sexta",
                        hora: "17:00 - 01:00",
                    },
                    {
                        dia: "Sábado",
                        hora: "14:00 - 01:00"
                    },
                    {
                        dia: "Domingo",
                        hora: "14:00 - 00:00"
                    }
                ]

            },
            {
                id: 1,
                nome: "Domino's",
                cozinha: "Pizza",
                distancia: "0,6",
                imagem: "https://i.pinimg.com/originals/09/50/3f/09503f43a3206c155821fc0937885c5e.png",
                endereco: "Av. Dom Hélder Câmara, 2222 - Cachambi, Rio de Janeiro",
                telefone: "(22) 2222-2222",
                funcionamento: [
                    {
                        dia: "Segunda",
                        hora: "Não abre"
                    },
                    {
                        dia: "Terça",
                        hora: "17:00 - 00:00",
                    },
                    {
                        dia: "Quarta",
                        hora: "Não abre"
                    },
                    {
                        dia: "Quinta",
                        hora: "17:00 - 00:00"
                    },
                    {
                        dia: "Sexta",
                        hora: "17:00 - 01:00",
                    },
                    {
                        dia: "Sábado",
                        hora: "14:00 - 01:00"
                    },
                    {
                        dia: "Domingo",
                        hora: "14:00 - 00:00"
                    }
                ]

            },
            {
                id: 2,
                nome: "Get Bar Bar",
                cozinha: "Bar",
                distancia: "1,3",
                imagem: "https://image.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-260nw-1034296870.jpg",
                endereco: "Av. Dom Hélder Câmara, 3333 - Cachambi, Rio de Janeiro",
                telefone: "(33) 3333-3333",
                funcionamento: [
                    {
                        dia: "Segunda",
                        hora: "Não abre"
                    },
                    {
                        dia: "Terça",
                        hora: "17:00 - 00:00",
                    },
                    {
                        dia: "Quarta",
                        hora: "Não abre"
                    },
                    {
                        dia: "Quinta",
                        hora: "17:00 - 00:00"
                    },
                    {
                        dia: "Sexta",
                        hora: "17:00 - 01:00",
                    },
                    {
                        dia: "Sábado",
                        hora: "14:00 - 01:00"
                    },
                    {
                        dia: "Domingo",
                        hora: "14:00 - 00:00"
                    }
                ]

            },
            {
                id: 3,
                nome: "Explorer Bar",
                cozinha: "Variada",
                distancia: "1,4",
                imagem: "https://itmidia.com/wp-content/uploads/sites/5/2015/06/internetexplorerlogo_625.jpg",
                endereco: "Av. Dom Hélder Câmara, 4444 - Cachambi, Rio de Janeiro",
                telefone: "(44) 4444-4444",
                funcionamento: [
                    {
                        dia: "Segunda",
                        hora: "Não abre"
                    },
                    {
                        dia: "Terça",
                        hora: "17:00 - 00:00",
                    },
                    {
                        dia: "Quarta",
                        hora: "Não abre"
                    },
                    {
                        dia: "Quinta",
                        hora: "17:00 - 00:00"
                    },
                    {
                        dia: "Sexta",
                        hora: "17:00 - 01:00",
                    },
                    {
                        dia: "Sábado",
                        hora: "14:00 - 01:00"
                    },
                    {
                        dia: "Domingo",
                        hora: "14:00 - 00:00"
                    }
                ]

            },
            {
                id: 4,
                nome: "Bar do David",
                cozinha: "Brasileira",
                distancia: "1,5",
                imagem: "https://static.vecteezy.com/system/resources/previews/000/061/183/non_2x/bar-logo-vector.jpg",
                endereco: "Av. Dom Hélder Câmara, 5555 - Cachambi, Rio de Janeiro",
                telefone: "(55) 5555-5555",
                funcionamento: [
                    {
                        dia: "Segunda",
                        hora: "Não abre"
                    },
                    {
                        dia: "Terça",
                        hora: "17:00 - 00:00",
                    },
                    {
                        dia: "Quarta",
                        hora: "Não abre"
                    },
                    {
                        dia: "Quinta",
                        hora: "17:00 - 00:00"
                    },
                    {
                        dia: "Sexta",
                        hora: "17:00 - 01:00",
                    },
                    {
                        dia: "Sábado",
                        hora: "14:00 - 01:00"
                    },
                    {
                        dia: "Domingo",
                        hora: "14:00 - 00:00"
                    }
                ]
            }
        ]
    }

    detalheEstabelecimento(id) {

        this.estabelecimentosService.setEstabelecimento(id, this.estabelecimentos);
        this.router.navigate(['estabelecimentos-detalhe'], id);
    }

    ngOnInit() {
        console.log(this.estabelecimentos);
    }

}
