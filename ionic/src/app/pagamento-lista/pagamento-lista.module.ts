import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagamentoListaPage } from './pagamento-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagamentoListaPage]
})
export class PagamentoListaPageModule {}
