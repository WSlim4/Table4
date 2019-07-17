import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pessoas = [
    {id:1, nome:'Fábio', pagar:'10 reais'},
    {id:2, nome:'Igor', pagar:'10 reais'},
    {id:3, nome:'Stephanie', pagar:'10 reais'},
    {id:4, nome:'Mauro', pagar:'10 reais'},
    {id:5, nome:'Wesley', pagar:'10 reais'}
  ]
  constructor() {}

}
