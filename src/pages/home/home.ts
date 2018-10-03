import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CsPage;
  dibujo = DibujoPage;
  

  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);
  }

  clickCiencias(){
    this.navCtrl.push(this.ciencias);
  }

  clickDib(){
    this.navCtrl.push(this.dibujo);
  }

}
