import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { MesaService } from '../services/mesa/mesa.service';
import { PedidoService } from '../services/pedido/pedido.service'
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-historico-detalhe',
    templateUrl: './historico-detalhe.page.html',
    styleUrls: ['./historico-detalhe.page.scss'],
})
export class HistoricoDetalhePage implements OnInit {

    mesaId;
    mesa: any[];
    pessoas = [];
    pedidoId;
    pedidos;

    constructor(private pessoaService: PessoaService, private mesaService: MesaService, private pedidoService: PedidoService, private storage: Storage, private router: Router) {
        this.mesaId = this.router.getCurrentNavigation().extras;
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.pessoas = [];
        this.mesaService.getMesa(this.mesaId).subscribe(
            (res) => {
                this.mesa = res.data;
                console.log(this.mesa);
            },
            (error) => {
                console.log(error);
            });
        this.pessoaService.getPessoasPedidos(this.mesaId).subscribe((res) => {
            console.log(res);
            this.pessoas = res;
        },
            (error) => {
                console.log(error);
            });
        this.pedidoService.getPedidosMesa(this.mesaId).subscribe(
            (res) => {
                this.pedidos = res;
                for (let i in this.pedidos) {
                    this.pedidos[i].valorPedido = this.pedidos[i].preco * this.pedidos[i].quantidade;
                }
                console.log(this.pedidos);
            },
            (error) => {
                console.log(error);
            });
    }

    ionViewDidEnter() {
    }

}
