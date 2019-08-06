import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FazendoPedidoPage } from './fazendo-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: FazendoPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FazendoPedidoPage]
})
export class FazendoPedidoPageModule {}
