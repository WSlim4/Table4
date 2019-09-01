import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pedidos = [
    {id:1, nome:'Cerveja', valor:'10 reais'},
    {id:2, nome:'Batata Frita', valor:'10 reais'},
    {id:3, nome:'Sorvete', valor:'10 reais'},
    {id:4, nome:'Hamburguer', valor:'10 reais'},
    {id:5, nome:'Amendoim kkkk', valor:'10 reais'}
  ]
  constructor() {}

changeTextColor(){
    $('#myButton').text('white');
  }
}
