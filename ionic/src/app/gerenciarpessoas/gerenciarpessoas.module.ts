import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciarpessoasPage } from './gerenciarpessoas.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarpessoasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [GerenciarpessoasPage]
})
export class GerenciarpessoasPageModule {}
