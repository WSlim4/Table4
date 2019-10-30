import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderTotalFecharComponent } from './header-total-fechar/header-total-fechar.component';

@NgModule({
    declarations: [HeaderTotalFecharComponent],
    imports: [IonicModule, CommonModule],
    exports: [HeaderTotalFecharComponent]
})

export class ComponentsModule {}
