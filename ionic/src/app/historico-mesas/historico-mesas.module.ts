import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoMesasPage } from './historico-mesas.page';
import { HistoricoCardComponent } from './historico-card/historico-card.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoMesasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoricoMesasPage, HistoricoCardComponent]
})
export class HistoricoMesasPageModule {}
