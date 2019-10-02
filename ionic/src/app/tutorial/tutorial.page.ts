import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

// Slide import
import { IonSlides } from '@ionic/angular';

//Service
import { MesaService } from '../services/mesa/mesa.service';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  quantPessoas: number;
  pessoas = [];

  constructor(private mesaService: MesaService, private pessoaService: PessoaService, private storage: Storage, public router: Router) { }

  swipeNext(){
    this.slides.slideNext();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.mesaService.createTable(form.value.estabelecimento, 'real').subscribe(
      (res) => {
        //Guarda id da mesa no Storage
        this.storage.set('mesa_id', res.data.id);

        //Cria as pessoas na mesa
        for(let i = 0; i < this.quantPessoas; i++){
          var pessoa = 'pessoa' + (i+1);
          console.log(form.value[pessoa]);
          this.pessoaService.createPessoa(form.value[pessoa], res.data.id).subscribe( 
            (res) => {
              console.log(res);
              this.router.navigate(['tabs/tab2']);
            },
            (error) => {
              console.log("Erro ao criar pessoa.");
            });
        }

      },
      (error) => {
        console.log("Erro ao criar a mesa.");
      }
    );
  }

  criaArray(quant){
    this.pessoas=[];
    for( let i=0; i < quant; i++){
      this.pessoas.push('');
    }
    console.log(this.pessoas);
  }

}
