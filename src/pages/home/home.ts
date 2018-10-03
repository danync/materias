import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CsPage;
  

  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);
  }

  clickCiencias(){
    this.navCtrl.push(this.ciencias);
  }

}
