import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { AlertController, ToastController } from '@ionic/angular';
import { PedidoService } from '../../services/pedido/pedido.service';

@Component({
    selector: 'app-pedido-pessoa-card',
    templateUrl: './pedido-pessoa-card.component.html',
    styleUrls: ['./pedido-pessoa-card.component.scss'],
})
export class PedidoPessoaCardComponent implements OnInit {

    @Input() pessoa;
    @Output() configuracaoClicked = new EventEmitter<number>();
    pedidos;
    @Output() pagamentoClicked = new EventEmitter<number>();
    @Output() nameUpdated = new EventEmitter<number>();

    configuracao: boolean = false;

    constructor(public alertController: AlertController,
        private toastController: ToastController,
        private pedidoService: PedidoService,
        private pessoaService: PessoaService) { }

    async dropdownConfiguracao(id) {
        if (this.configuracao) {
            this.configuracao = false;
        } else {
            this.pedidoService.getPedidosPessoa(id).subscribe((res) => {
                this.pedidos = res;
            });
            console.log(this.pedidos);
            this.configuracao = true;
        }
    }

    async editandoPessoa() {
        const alert = await this.alertController.create({
            header: 'Editar nome usuário',
            message: 'Ao clicar em alterar você modificara o nome do usuário',
            inputs: [
                {
                    name: 'name1',
                    type: 'text',
                    value: this.pessoa.nome,
                    placeholder: 'Editar Nome',
                }],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Cancelado');
                    }
                }, {
                    text: 'Alterar',
                    handler: (data) => {
                        this.pessoaService.updatePessoaNome(data.name1, this.pessoa.id).subscribe(
                            (res) => {
                                this.nameUpdated.emit();
                                console.log(res);
                            },
                            (error) => {
                                console.log(error);
                            }
                        );
                        console.log('Confirmado Alteração');
                    }
                }
            ]
        });

        await alert.present();
    }

    finalizandoPedidoPessoa(id) {
        if(!this.pessoa.valorConta){
            this.deveFazerPedido();
        }
        else {
            this.pagamentoClicked.emit(id);
        }
    }

    deletarPessoa(id) {
        if(this.pessoa.valorConta){
            this.devePagar();
        }
        else {
            this.pessoaService.deletePessoa(id).subscribe(
                (res) => {
                    this.nameUpdated.emit();
                    console.log(res);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    async devePagar() {
        const toast = await this.toastController.create({
            position: "top",
            message: "Há pedidos pendentes. Por favor, pague sua conta ou delete seu pedido.",
            duration: 2000
        });
        toast.present();
    }

    async deveFazerPedido() {
        const toast = await this.toastController.create({
            position: "top",
            message: "Você deve realizar um pedido antes de pagar.",
            duration: 2000
        });
        toast.present();
    }

    ionViewWillEnter() {
        this.nameUpdated.emit();
    }

    ngOnInit() { }
}
