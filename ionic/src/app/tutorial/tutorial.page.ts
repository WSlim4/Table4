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

  constructor() { }

  swipeNext(){
    this.slides.slideNext();
  }

  ngOnInit() {
  }

}
