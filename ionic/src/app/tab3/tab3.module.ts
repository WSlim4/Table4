import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Component } from '@angular/core';
import { ComponentsModule } from '../components/components.module';

//components
import { PedidoCardComponent } from './pedido-card/pedido-card.component';
import{EditandoPedidoModalPage} from './editando-pedido-modal/editando-pedido-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, PedidoCardComponent, EditandoPedidoModalPage],
  entryComponents: [EditandoPedidoModalPage]
})

export class Tab3PageModule {}
