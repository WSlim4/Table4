import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { EventEmitterService } from "../../services/evento/event-emitter.service";
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-editando-pedido-modal',
  templateUrl: './editando-pedido-modal.component.html',
  styleUrls: ['./editando-pedido-modal.component.scss'],
})
export class EditandoPedidoModalComponent implements OnInit {

      @Input() pedido;
      @Output() pedidoUpdated = new EventEmitter<number>();

      pessoas: any[];
      consumidores = [];
      pessoa = {
          id:'',
          valorDivisao: ''
      };

      id;
      nome;
      preco;
      quantidade;

      checked: boolean;
      masterChecked: boolean;
      isIndeterminate: boolean;
      toggle: boolean = false;
      mesaId;

      form: FormGroup;

      constructor(public formBuilder: FormBuilder,
                  private pedidoService: PedidoService,
                  private pessoaService: PessoaService,
                  private toastController: ToastController,
                  private modalController: ModalController,
                  private storage: Storage,
                  private eventEmitterService: EventEmitterService,
                  private router: Router) {

          this.form = this.formBuilder.group({
              nome: [null, [Validators.required]],
              preco: [null, [Validators.required]],
              quantidade: [null, [Validators.required]],
              pessoa_id: [null, [Validators.required]],
          });
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

      getPessoas(){
          this.pessoas = [];
          let people = [];
          console.log("Resgatando pessoas no Back");
          this.storage.get("mesa_id").then( (mesa_id) => {
              this.mesaId = mesa_id;
              this.pessoaService.getPessoasMesa(mesa_id).subscribe( (res) => {
                  res.forEach(function (item) {
                      if(!item.pago) {
                          people.push(item);
                      }
                  });
                  this.pessoas = people;
                  console.log(this.pessoas);
                  for (let pessoa of this.pessoas) {
                      pessoa['checked'] = false;
                  }
              });
            });
      }

      ionViewWillEnter() {
          this.getPessoas();
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
          let preco: number = form.value.quantidade * form.value.preco;
          console.log(preco);
          //divisão igualitária
          if (!this.toggle) {
              let dividido = preco / this.consumidores.length;
              for (let i = 0; i < this.consumidores.length; i++) {
                  this.consumidores[i].preco = dividido;
              }
              //Chamar a função da service
              this.pedidoService.deletePedido(this.id).subscribe( (res) => {
                console.log(res);
              },
              (error) => {
                console.log(error);
              });
              this.pedidoService.postPedido(form.value.nome, form.value.quantidade, form.value.preco, this.mesaId, this.consumidores).subscribe(
                  (res) => {
                      console.log(res);
                      this.eventEmitterService.get('dismiss').emit('Deu dismiss');
                      this.dismiss();
                  },
                  (error) => {
                      console.log(error);
                  }
              );
              console.log(this.consumidores);

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
                  this.pedidoService.deletePedido(this.id).subscribe( (res) => {
                    console.log(res);
                  },
                  (error) => {
                    console.log(error);
                  });
                  this.pedidoService.postPedido(form.value.nome, form.value.quantidade, form.value.preco, this.mesaId, this.consumidores).subscribe(
                      (res) => {
                          console.log(res);
                          this.eventEmitterService.get('dismiss').emit('Deu dismiss');
                          this.dismiss();
                      },
                      (error) => {
                          console.log(error);
                      }
                  );
              }
              else {
                  this.contaErrada();
                  console.log("Vai calcular de novoooo");
              }
          }
      }

      async contaErrada() {
          const toast = await this.toastController.create({
              position: "top",
              message: "A conta não está batendo!",
              duration: 2000
          });
          toast.present();
      }

      async preencherCampos() {
          const toast = await this.toastController.create({
              position: "top",
              message: "Preencha todos os campos corretamente!",
              duration: 2000
          });
          toast.present();
      }

      dismiss() {
      this.modalController.dismiss({
        'dismissed': true
    });
    }

  ngOnInit() {

  }

  }
