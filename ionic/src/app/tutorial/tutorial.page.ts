import { Component, OnInit,ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';

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

  constructor(private mesaService: MesaService, private pessoaService: PessoaService, private storage: Storage) { }

  swipeNext(){
    this.slides.slideNext();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.mesaService.createTable(form.value.estabelecimento).subscribe(
      (res) => {
        console.log(res);
        this.storage.set('mesa_id', res.data.id);
        for(let i = 0; i < this.quantPessoas; i++){
          let var = 'pessoa' + (i+1);
          console.log(form.value[var]);
          //this.pessoaService.createPessoa(, res.data.id);
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
