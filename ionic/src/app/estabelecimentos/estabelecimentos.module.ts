import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentosPage } from './estabelecimentos.page';
import { EstabelecimentosListComponent } from './estabelecimentos-list/estabelecimentos-list.component';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstabelecimentosPage, EstabelecimentosListComponent]
})
export class EstabelecimentosPageModule {}
