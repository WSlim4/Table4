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
  //   this.estabelecimentos = [
  //     {
  //       id: 0,
  //       nome: "Outback",
  //       cozinha: "Steakhouse",
  //       distancia: "0,4",
  //       logo: "https://i1.wp.com/douglaspinturas.com.br/wp-content/uploads/2018/05/outback-logo.jpg?fit=673%2C504&ssl=1",
  //       fundo: "https://i1.wp.com/douglaspinturas.com.br/wp-content/uploads/2018/05/outback-logo.jpg?fit=673%2C504&ssl=1",
  //       instagram: true,
  //       endereco: "Av. Dom Hélder Câmara, 1111 - Cachambi, Rio de Janeiro",
  //       telefone: "(11) 1111-1111",
  //       funcionamento: [
  //         {
  //           dia: "Segunda",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Terça",
  //           hora: "17:00 - 00:00",
  //         },
  //         {
  //           dia: "Quarta",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Quinta",
  //           hora: "17:00 - 00:00"
  //         },
  //         {
  //           dia: "Sexta",
  //           hora: "17:00 - 01:00",
  //         },
  //         {
  //           dia: "Sábado",
  //           hora: "14:00 - 01:00"
  //         },
  //         {
  //           dia: "Domingo",
  //           hora: "14:00 - 00:00"
  //         }
  //       ],
  //       caracteristicas: [
  //         {
  //           nome: "Wi-fi",
  //           checked: true
  //         },
  //         {
  //           nome: "Faz reserva",
  //           checked: true
  //         },
  //         {
  //           nome: "Rampa para cadeirantes",
  //           checked: false
  //         },
  //         {
  //           nome: "Mesas externas",
  //           checked: true
  //         },
  //         {
  //           nome: "Cadeira infantil",
  //           checked: false
  //         },
  //         {
  //           nome: "Espaço recreação infantil",
  //           checked: true
  //         },
  //         {
  //           nome: "Balcão",
  //           checked: true
  //         },
  //         {
  //           nome: "Ar condicionado",
  //           checked: false
  //         },
  //         {
  //           nome: "Estacionamento",
  //           checked: true
  //         },
  //         {
  //           nome: "Permitido animais",
  //           checked: true
  //         },
  //         {
  //           nome: "Espaço para fumantes",
  //           checked: true
  //         },
  //         {
  //           nome: "Couvert artístico",
  //           checked: true
  //         }
  //       ]
  //     },
  //     {
  //       id: 1,
  //       nome: "Domino's",
  //       cozinha: "Pizza",
  //       distancia: "0,6",
  //       logo: "https://i.pinimg.com/originals/09/50/3f/09503f43a3206c155821fc0937885c5e.png",
  //       fundo: "https://i.pinimg.com/originals/09/50/3f/09503f43a3206c155821fc0937885c5e.png",
  //       instagram: true,
  //       endereco: "Av. Dom Hélder Câmara, 2222 - Cachambi, Rio de Janeiro",
  //       telefone: "(22) 2222-2222",
  //       funcionamento: [
  //         {
  //           dia: "Segunda",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Terça",
  //           hora: "17:00 - 00:00",
  //         },
  //         {
  //           dia: "Quarta",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Quinta",
  //           hora: "17:00 - 00:00"
  //         },
  //         {
  //           dia: "Sexta",
  //           hora: "17:00 - 01:00",
  //         },
  //         {
  //           dia: "Sábado",
  //           hora: "14:00 - 01:00"
  //         },
  //         {
  //           dia: "Domingo",
  //           hora: "14:00 - 00:00"
  //         }
  //       ],
  //       caracteristicas: [
  //         {
  //           nome: "Wi-fi",
  //           checked: true
  //         },
  //         {
  //           nome: "Faz reserva",
  //           checked: true
  //         },
  //         {
  //           nome: "Rampa para cadeirantes",
  //           checked: false
  //         },
  //         {
  //           nome: "Mesas externas",
  //           checked: true
  //         },
  //         {
  //           nome: "Cadeira infantil",
  //           checked: false
  //         },
  //         {
  //           nome: "Espaço recreação infantil",
  //           checked: true
  //         },
  //         {
  //           nome: "Balcão",
  //           checked: true
  //         },
  //         {
  //           nome: "Ar condicionado",
  //           checked: false
  //         },
  //         {
  //           nome: "Estacionamento",
  //           checked: true
  //         },
  //         {
  //           nome: "Permitido animais",
  //           checked: true
  //         },
  //         {
  //           nome: "Espaço para fumantes",
  //           checked: true
  //         },
  //         {
  //           nome: "Couvert artístico",
  //           checked: true
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       nome: "Get Bar Bar",
  //       cozinha: "Bar",
  //       distancia: "1,3",
  //       logo: "https://image.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-260nw-1034296870.jpg",
  //       fundo: "https://image.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-260nw-1034296870.jpg",
  //       instagram: false,
  //       endereco: "Av. Dom Hélder Câmara, 3333 - Cachambi, Rio de Janeiro",
  //       telefone: "(33) 3333-3333",
  //       funcionamento: [
  //         {
  //           dia: "Segunda",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Terça",
  //           hora: "17:00 - 00:00",
  //         },
  //         {
  //           dia: "Quarta",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Quinta",
  //           hora: "17:00 - 00:00"
  //         },
  //         {
  //           dia: "Sexta",
  //           hora: "17:00 - 01:00",
  //         },
  //         {
  //           dia: "Sábado",
  //           hora: "14:00 - 01:00"
  //         },
  //         {
  //           dia: "Domingo",
  //           hora: "14:00 - 00:00"
  //         }
  //       ],
  //       caracteristicas: [
  //         {
  //           nome: "Wi-fi",
  //           checked: true
  //         },
  //         {
  //           nome: "Faz reserva",
  //           checked: true
  //         },
  //         {
  //           nome: "Rampa para cadeirantes",
  //           checked: false
  //         },
  //         {
  //           nome: "Mesas externas",
  //           checked: true
  //         },
  //         {
  //           nome: "Cadeira infantil",
  //           checked: false
  //         },
  //         {
  //           nome: "Espaço recreação infantil",
  //           checked: true
  //         },
  //         {
  //           nome: "Balcão",
  //           checked: true
  //         },
  //         {
  //           nome: "Ar condicionado",
  //           checked: false
  //         },
  //         {
  //           nome: "Estacionamento",
  //           checked: true
  //         },
  //         {
  //           nome: "Permitido animais",
  //           checked: true
  //         },
  //         {
  //           nome: "Espaço para fumantes",
  //           checked: true
  //         },
  //         {
  //           nome: "Couvert artístico",
  //           checked: true
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       nome: "Explorer Bar",
  //       cozinha: "Variada",
  //       distancia: "1,4",
  //       logo: "https://itmidia.com/wp-content/uploads/sites/5/2015/06/internetexplorerlogo_625.jpg",
  //       fundo: "https://itmidia.com/wp-content/uploads/sites/5/2015/06/internetexplorerlogo_625.jpg",
  //       instagram: true,
  //       endereco: "Av. Dom Hélder Câmara, 4444 - Cachambi, Rio de Janeiro",
  //       telefone: "(44) 4444-4444",
  //       funcionamento: [
  //         {
  //           dia: "Segunda",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Terça",
  //           hora: "17:00 - 00:00",
  //         },
  //         {
  //           dia: "Quarta",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Quinta",
  //           hora: "17:00 - 00:00"
  //         },
  //         {
  //           dia: "Sexta",
  //           hora: "17:00 - 01:00",
  //         },
  //         {
  //           dia: "Sábado",
  //           hora: "14:00 - 01:00"
  //         },
  //         {
  //           dia: "Domingo",
  //           hora: "14:00 - 00:00"
  //         }
  //       ],
  //       caracteristicas: [
  //         {
  //           nome: "Wi-fi",
  //           checked: true
  //         },
  //         {
  //           nome: "Faz reserva",
  //           checked: true
  //         },
  //         {
  //           nome: "Rampa para cadeirantes",
  //           checked: false
  //         },
  //         {
  //           nome: "Mesas externas",
  //           checked: true
  //         },
  //         {
  //           nome: "Cadeira infantil",
  //           checked: false
  //         },
  //         {
  //           nome: "Espaço recreação infantil",
  //           checked: true
  //         },
  //         {
  //           nome: "Balcão",
  //           checked: true
  //         },
  //         {
  //           nome: "Ar condicionado",
  //           checked: false
  //         },
  //         {
  //           nome: "Estacionamento",
  //           checked: true
  //         },
  //         {
  //           nome: "Permitido animais",
  //           checked: true
  //         },
  //         {
  //           nome: "Espaço para fumantes",
  //           checked: true
  //         },
  //         {
  //           nome: "Couvert artístico",
  //           checked: true
  //         }
  //       ]
  //     },
  //     {
  //       id: 4,
  //       nome: "Bar do David",
  //       cozinha: "Brasileira",
  //       distancia: "1,5",
  //       logo: "https://static.vecteezy.com/system/resources/previews/000/061/183/non_2x/bar-logo-vector.jpg",
  //       fundo: "https://static.vecteezy.com/system/resources/previews/000/061/183/non_2x/bar-logo-vector.jpg",
  //       instagram: false,
  //       endereco: "Av. Dom Hélder Câmara, 5555 - Cachambi, Rio de Janeiro",
  //       telefone: "(55) 5555-5555",
  //       funcionamento: [
  //         {
  //           dia: "Segunda",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Terça",
  //           hora: "17:00 - 00:00",
  //         },
  //         {
  //           dia: "Quarta",
  //           hora: "Não abre"
  //         },
  //         {
  //           dia: "Quinta",
  //           hora: "17:00 - 00:00"
  //         },
  //         {
  //           dia: "Sexta",
  //           hora: "17:00 - 01:00",
  //         },
  //         {
  //           dia: "Sábado",
  //           hora: "14:00 - 01:00"
  //         },
  //         {
  //           dia: "Domingo",
  //           hora: "14:00 - 00:00"
  //         }
  //       ],
  //       caracteristicas: [
  //         {
  //           nome: "Wi-fi",
  //           checked: true
  //         },
  //         {
  //           nome: "Faz reserva",
  //           checked: true
  //         },
  //         {
  //           nome: "Rampa para cadeirantes",
  //           checked: false
  //         },
  //         {
  //           nome: "Mesas externas",
  //           checked: true
  //         },
  //         {
  //           nome: "Cadeira infantil",
  //           checked: false
  //         },
  //         {
  //           nome: "Espaço recreação infantil",
  //           checked: true
  //         },
  //         {
  //           nome: "Balcão",
  //           checked: true
  //         },
  //         {
  //           nome: "Ar condicionado",
  //           checked: false
  //         },
  //         {
  //           nome: "Estacionamento",
  //           checked: true
  //         },
  //         {
  //           nome: "Permitido animais",
  //           checked: true
  //         },
  //         {
  //           nome: "Espaço para fumantes",
  //           checked: true
  //         },
  //         {
  //           nome: "Couvert artístico",
  //           checked: true
  //         }
  //       ]
  //     }
  //   ]
  }

getEstabelecimentos() {
    this.estabelecimentosService.getEstabelecimentos().subscribe(
        (res) => {
            console.log(res);
            this.estabelecimentos = res;
        },
        (error) => {
           console.log(error);
        });
}

  // detalheEstabelecimento(id) {
  //   this.estabelecimentosService.setEstabelecimento(id, this.estabelecimentos);
  //   this.router.navigate(['estabelecimentos-detalhe'], id);
  // }

  detalheEstabelecimento(id) {
      this.router.navigate(['estabelecimentos-detalhe'], id);
  }

  ionViewWillEnter() {
      this.estabelecimentos = [];
      this.getEstabelecimentos();
  }

  ngOnInit() {
  }

}
