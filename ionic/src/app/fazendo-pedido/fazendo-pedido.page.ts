import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../services/pedido/pedido.service';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-fazendo-pedido',
    templateUrl: './fazendo-pedido.page.html',
    styleUrls: ['./fazendo-pedido.page.scss'],
})
export class FazendoPedidoPage {

    pessoas: any[];
    consumidores = [];
    pessoa = {
        id:'',
        valorDivisao: ''
    };

    nome;
    valor;
    quantidade;

    checked: boolean;
    masterChecked: boolean;
    isIndeterminate: boolean;
    toggle: boolean = false;
    mesaId;

    form: FormGroup;

    constructor(public formBuilder: FormBuilder, 
                private PedidoService: PedidoService, 
                private pessoaService: PessoaService, 
                private toastController: ToastController, 
                private storage: Storage,
                private router: Router) {

        this.form = this.formBuilder.group({
            nome: [null, [Validators.required]],
            valor: [null, [Validators.required]],
            quantidade: [null, [Validators.required]],
            pessoa_id: [null, [Validators.required]],
        });
        this.mesaId = this.storage.get('mesa_id');
    }

    checkMaster() {
        setTimeout(() => {
            this.pessoas.forEach(obj => {
                obj.checked = this.masterChecked;
            });
        });
    }

    checkEvent() {
        const totalItems = this.pessoas.length;
        let checked = 0;
        //checa quantas pessoas foram selecionadas
        this.pessoas.map(obj => {
            if (obj.checked) checked++;
        });
        if (checked > 0 && checked < totalItems) {
            //se pelo menos uma foi selecionada (mas não todas)
            this.isIndeterminate = true;
            this.masterChecked = false;
        } else if (checked == totalItems) {
            //se todas foram selecionada
            this.masterChecked = true;
            this.isIndeterminate = false;
        } else {
            //se nenhuma foi selecionada
            this.isIndeterminate = false;
            this.masterChecked = false;
        }
    }

    changeToggle() {
        this.toggle = !this.toggle;
    }

    getPessoa(): void {
        console.log("Resgatando pessoas no Back");
        this.storage.get("mesa_id").then( (mesa_id) => {
            this.pessoaService.getPessoasMesa(mesa_id).subscribe( (res) => {
                this.pessoas = res;
                console.log(this.pessoas);
                for (let pessoa of this.pessoas) {
                    pessoa['checked'] = false;
                }
            });
          });
    }

    ionViewWillEnter() {
        this.getPessoa();
    }

    onSubmit(form) {
        console.log(form);
        //esvazia o array de consumidores;
        this.consumidores = [];
        if (!form.valid) {
            this.preencherCampos();
            console.log("inválido");
            return
        }
        console.log("válido");
        //checa se a pessoa está marcada e envia para o array de consumidores
        for (let i = 0; i < this.pessoas.length; i++) {
            if (this.pessoas[i].checked) {
                this.consumidores.push(this.pessoas[i]);
            }
        }
        //calcula o valor total do pedido
        let preco: number = form.value.quantidade * form.value.valor;
        console.log(preco);
        //divisão igualitária
        if (!this.toggle) {
            let dividido = preco / this.consumidores.length;
            for (let i = 0; i < this.consumidores.length; i++) {
                this.consumidores[i].preco = dividido;
            }
            //Chamar a função da service
            this.PedidoService.postPedido(form.value.nome, form.value.quantidade, form.value.valor, this.mesaId, [{id: 1, valor: 15}, {id: 2, valor: 10}]);
            console.log(this.consumidores);
            this.router.navigate(['/tabs/tab3']);
        }
        //divisão customizada
        else {
            let soma = 0;
            for (let i = 0; i < this.pessoas.length; i++) {
                if (this.pessoas[i].checked) {
                    let peso = 'peso' + (i + 1);
                    this.pessoas[i].preco = form.value[peso];
                    soma += form.value[peso];
                    console.log(form.value[peso]);
                    console.log(soma);
                }
            }
            console.log(this.consumidores);
            //checa se o total pago é igual ao preço total do pedido
            if (soma == preco) {
                //Chamar a função da Service
                console.log("Yay");
                this.router.navigate(['/tabs/tab3']);
            }
            else {
                this.contaErrada();
                console.log("Vai calcular de novoooo");
            }
        }
        /*this.PedidoService.postPedido(form.value.nome, form.value.quantidade,
          form.value.valor, 1).subscribe(
            (res) => {
              console.log(res);
            },
            (error) => {
              console.log(error);
            }
          );*/
    }

    async contaErrada() {
        const toast = await this.toastController.create({
            position: "middle",
            message: "A conta não está batendo!",
            duration: 2000
        });
        toast.present();
    }

    async preencherCampos() {
        const toast = await this.toastController.create({
            position: "middle",
            message: "Preencha todos os campos corretamente!",
            duration: 2000
        });
        toast.present();
    }

}
