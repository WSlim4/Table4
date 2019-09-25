import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//Services
import { TabsService } from './services/core/tabs.service';
import { PessoaService } from './services/pessoa/pessoa.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [
    TabsService,
    StatusBar,
    SplashScreen,
    PessoaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
