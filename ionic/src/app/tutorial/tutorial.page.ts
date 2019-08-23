import { Component, OnInit,ViewChild  } from '@angular/core';

// slider import
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  quantPessoas: number;
  pessoas = [];

  constructor() { }

  swipeNext(){
    this.slides.slideNext();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.pessoas);
    console.log(form);
  }

  criaArray(quant){
    this.pessoas=[];
    for( let i=0; i < quant; i++){
      this.pessoas.push('');
    }
    console.log(this.pessoas);
  }

}
