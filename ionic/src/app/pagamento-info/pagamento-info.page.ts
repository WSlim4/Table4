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

    pedidos = [
        {
            nome: 'Batata Frita',
            valor: '15,00'
        },
        {
            nome: 'Rolinho a primavera com molho picante',
            valor: '45,00'
        }
    ];
    taxa;
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
        this.pedidoService.getPedidosPessoa(this.pessoaId).subscribe((res) => {
            this.pessoa = res;
            console.log(this.pessoa);
        });
    }

    ionViewWillEnter() {
        //Recebe o total da conta
        this.total = 60;

        //Taxa padrão é 10%
        this.taxa = 10;

        //Calcula o total com a taxa
        this.calculaTotal(this.taxa);
    }

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

    confirmPag() {
        console.log("Pagamento confirmado!");
    }

    pagPicPay() {
        this.pagApp = this.inAppBrowser.create('com.picpay','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagPayPal() {
        this.pagApp = this.inAppBrowser.create('com.paypal.android.p2pmobile','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagCielo() {
        this.pagApp = this.inAppBrowser.create('com.m4u.cielomobile','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagWad() {
        this.pagApp = this.inAppBrowser.create('br.com.wad','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagPagBank() {
        this.pagApp = this.inAppBrowser.create('br.com.uol.ps.myaccount','_system',{location:'yes'});
        this.closeDrawer();
    }

    pagBoletoFacil() {
        this.pagApp = this.inAppBrowser.create('com.boletobancario.boletofacil','_system',{location:'yes'});
        this.closeDrawer();
    }

    //Função que calcula o total do pagamento incluindo a taxa de servço que o usuário escolheu
    calculaTotal(taxa) {
        let porcentagem = (this.total * taxa) / 100;
        this.totalNovo = this.total + porcentagem;
    }

}
