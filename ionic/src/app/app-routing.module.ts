import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },
  {
    path: 'gerenciarpessoas',
    loadChildren: './gerenciarpessoas/gerenciarpessoas.module#GerenciarpessoasPageModule'
  },
  {
    path: 'fazendo-pedido',
    loadChildren: './fazendo-pedido/fazendo-pedido.module#FazendoPedidoPageModule'
  },
  {
    path: 'historico-mesas',
    loadChildren: './historico-mesas/historico-mesas.module#HistoricoMesasPageModule'
  },
  {
    path: 'historico-detalhe',
    loadChildren: './historico-detalhe/historico-detalhe.module#HistoricoDetalhePageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
