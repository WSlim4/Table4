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
  },
  {
    path: 'editando-pedido-modal',
    loadChildren: './tab3/editando-pedido-modal/editando-pedido-modal.module#EditandoPedidoModalPageModule'
  },
  {
    path: 'pagamento-lista',
    loadChildren: './pagamento-lista/pagamento-lista.module#PagamentoListaPageModule'
  },
  {
    path: 'pagamento-info',
    loadChildren: './pagamento-info/pagamento-info.module#PagamentoInfoPageModule'
  },
  {
      path: 'estabelecimentos',
      loadChildren: './estabelecimentos/estabelecimentos.module#EstabelecimentosPageModule'
  },
  {
      path: 'estabelecimentos-detalhe',
      loadChildren: './estabelecimentos-detalhe/estabelecimentos-detalhe.module#EstabelecimentosDetalhePageModule'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
