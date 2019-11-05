import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ComponentsModule } from '../components/components.module';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

//components
import { PedidoCardComponent } from './pedido-card/pedido-card.component';
//import{ EditandoPedidoModalPage } from './editando-pedido-modal/editando-pedido-modal.page';
import { EditandoPedidoModalComponent } from './editando-pedido-modal/editando-pedido-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonBottomDrawerModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, PedidoCardComponent,
       //EditandoPedidoModalPage,
        EditandoPedidoModalComponent],
  entryComponents: [//EditandoPedidoModalPage,
       EditandoPedidoModalComponent]
})

export class Tab3PageModule {}
