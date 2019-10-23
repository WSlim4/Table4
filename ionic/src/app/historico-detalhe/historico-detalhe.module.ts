import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoDetalhePage } from './historico-detalhe.page';
import { PessoaListaPedidosComponent} from './pessoa-lista-pedidos/pessoa-lista-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricoDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoricoDetalhePage, PessoaListaPedidosComponent]
})
export class HistoricoDetalhePageModule {}
