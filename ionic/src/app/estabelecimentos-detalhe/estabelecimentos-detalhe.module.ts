import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentosDetalhePage } from './estabelecimentos-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstabelecimentosDetalhePage]
})
export class EstabelecimentosDetalhePageModule {}
