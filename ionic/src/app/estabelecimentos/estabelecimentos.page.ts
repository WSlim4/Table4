import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstabelecimentosService } from '../services/estabelecimentos/estabelecimentos.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.page.html',
  styleUrls: ['./estabelecimentos.page.scss'],
})
export class EstabelecimentosPage implements OnInit {

  estabelecimentos: any[];
  latitude: number;
  longitude:number;

  constructor(
    public router: Router,
    public estabelecimentosService: EstabelecimentosService,
    private geolocalizacao: Geolocation) { }

getEstabelecimentos() {
    this.estabelecimentosService.getEstabelecimentos().subscribe(
        (res) => {
            console.log(res);
            this.estabelecimentos = res;
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
      this.getEstabelecimentos();
  }

  getLocalizacao(){

  this.geolocalizacao.getCurrentPosition().then((resp) => {
   this.latitude = (resp.coords.latitude);
   this.longitude= (resp.coords.longitude);
  }).catch((error) => {
    console.log('Error getting location', error);
  });
  }

  ngOnInit() {
  }

}
