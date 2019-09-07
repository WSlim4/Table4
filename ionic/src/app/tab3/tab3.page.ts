import { Component } from '@angular/core';
import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pedidos = [
    {id:1, nome:'Cerveja', valor:'10'},
    {id:2, nome:'Batata Frita com Katshup e Salça com frango', valor:'10'},
    {id:3, nome:'Palavra Enoooooooooooooooooooooooooooooorme', valor:'10'},
    {id:4, nome:'Hamburguer', valor:'10'},
    {id:5, nome:'Amendoim', valor:'10'}
  ]
  constructor(public alertController: AlertController) {}

    async presentAlert(){
      const alert = await this.alertController.create({
        header:'Alert',
        subHeader:'Subtitle',
        message: 'This is an alert message',
        buttons:['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    }
  }
