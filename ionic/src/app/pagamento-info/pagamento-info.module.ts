import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { IonicModule } from '@ionic/angular';

import { PagamentoInfoPage } from './pagamento-info.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBottomDrawerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagamentoInfoPage]
})
export class PagamentoInfoPageModule {}
