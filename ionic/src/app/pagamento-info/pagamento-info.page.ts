import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';
import { PedidoService } from '../services/pedido/pedido.service';
import { Router } from '@angular/router';

import { DrawerState } from 'ion-bottom-drawer';
import { HostListener } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Platform } from '@ionic/angular';

declare let window: any;

@Component({
    selector: 'app-pagamento-info',
    templateUrl: './pagamento-info.page.html',
    styleUrls: ['./pagamento-info.page.scss'],
})
export class PagamentoInfoPage implements OnInit {

    // pedidos = [
    //     {
    //         nome: 'Batata Frita',
    //         valor: '15,00'
    //     },
    //     {
    //         nome: 'Rolinho a primavera com molho picante',
    //         valor: '45,00'
    //     }
    // ];

    taxa = 10;
    total;
    totalNovo;
    pessoaId;
    pessoa;

    screenHeight: number;
    screenWidth: number;

    shouldBounce = true;
    dockedHeight = 0;
    distanceTop = this.screenHeight;
    drawerState = DrawerState.Docked;
    states = DrawerState;
    minimumHeight = 100;
    disableDrag = false;

    pagApp;

    constructor(private pessoaService: PessoaService, private pedidoService: PedidoService, private router: Router, private inAppBrowser: InAppBrowser, private diagnostic: Diagnostic, private androidPermissions: AndroidPermissions, private device: Device, private appAvailability: AppAvailability, private platform: Platform) {
        this.pessoaId = this.router.getCurrentNavigation().extras;
        this.onResize();
    }

    ngOnInit() {
        this.pessoaService.getPessoa(this.pessoaId).subscribe((res) => {
            this.pessoa = res;
            //Calcula o total com a taxa
            this.calculaTotal(this.taxa);
            console.log(this.pessoa);
        });
    }

    ionViewWillEnter() {

    }

    //Função que calcula o total do pagamento incluindo a taxa de servço que o usuário escolheu
    calculaTotal(taxa) {
        let porcentagem = (this.pessoa.valorConta * taxa) / 100;
        porcentagem = Math.floor(porcentagem * 100) / 100;
        console.log(porcentagem);
        this.totalNovo = this.pessoa.valorConta + porcentagem;
    }

    confirmPag(id) {
        console.log(id);
        this.pessoaService.updatePessoaPag(true, id).subscribe(
            (res) => {
                console.log(res);
                console.log("Pagamento confirmado!");
                this.router.navigate(['tabs/tab2']).then(() => {
                    window.location.reload();
                });;
            },
            (error) => {
                console.log(error);
            }
        );

    }

    //Código abaixo é referente a parte do InAppBrowser.

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenHeight, this.screenWidth);
    }

    pagDrawer() {
        this.distanceTop = this.screenHeight / 2;
        this.drawerState = DrawerState.Top;
    }

    closeDrawer() {
        this.drawerState = DrawerState.Docked;
    }

    pagPicPay() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=com.picpay','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagPayPal() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagCielo() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=com.m4u.cielomobile','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagWad() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=br.com.wad','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagPagBank() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=br.com.uol.ps.myaccount','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagNubank() {
        this.pagApp = this.inAppBrowser.create('https://play.google.com/store/apps/details?id=com.nu.production','_system',{location:'yes'});
        this.closeDrawer();
    }
}
