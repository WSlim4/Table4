import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage {

  estabelecimentos=[];
  latitude: number;
  longitude:number;

  constructor(
    public router: Router,
    public estabelecimentosService: EstabelecimentosService,
    private geolocalizacao: Geolocation) { }

getEstabelecimentos() {
  this.estabelecimentos=[];
    this.estabelecimentosService.getEstabelecimentosProximos(this.latitude, this.longitude).subscribe(
        (res) => {
            console.log(res.data);
            this.estabelecimentos = res.data as [];
        },
        (error) => {
           console.log(error);
        });
}

  detalheEstabelecimento(id) {
      this.router.navigate(['estabelecimentos-detalhe'], id);
  }

  ionViewWillEnter() {
      this.estabelecimentos = [];
      this.getLocalizacao();
  }

  getLocalizacao(){
    this.geolocalizacao.getCurrentPosition().then((resp) => {
     this.latitude = (resp.coords.latitude);
     this.longitude= (resp.coords.longitude);
     this.getEstabelecimentos();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
