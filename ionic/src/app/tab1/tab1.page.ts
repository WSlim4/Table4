import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private storage: Storage) {}

  mesaAberta:boolean;

 ionViewWillEnter(){
   this.storage.get("mesa_id").then( (mesa_id)=>{
     if (mesa_id){
       this.mesaAberta=true;
     }else{
       this.mesaAberta=false;
     }
   });
 }
}
