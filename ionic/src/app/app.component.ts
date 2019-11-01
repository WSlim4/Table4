import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DeviceAccounts } from '@ionic-native/device-accounts/ngx';

import { TabsService } from './services/core/tabs.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deviceAccounts: DeviceAccounts,
    public tabs: TabsService,
    public auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  this.statusBar.backgroundColorByHexString('#ffffff');
    });
    this.deviceAccounts.getEmail()
    .then(account => {
      this.auth.createUser(account).subscribe( (res) => {
        console.log(res);
      });
    }).catch(error => console.error(error));
  }
}
