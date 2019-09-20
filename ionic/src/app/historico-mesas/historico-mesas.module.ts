import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoMesasPage } from './historico-mesas.page';
import { HistoricoListComponent } from './historico-list/historico-list.component';

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
  declarations: [HistoricoMesasPage, HistoricoListComponent]
})
export class HistoricoMesasPageModule {}
