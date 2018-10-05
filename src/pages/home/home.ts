import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';
import { ComunicaciónPage } from '../comunicaci\u00F3n/comunicaci\u00F3n';
import { PappsPage } from '../papps/papps';
import { RoboticaPage } from '../robotica/robotica';
import { PyEPage } from '../py-e/py-e';
import { MiPage } from '../mi/mi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CsPage;
  dibujo = DibujoPage;
  comunicacion = ComunicaciónPage;
  papps = PappsPage;
  robotica = RoboticaPage;
  prob = PyEPage;
  metodologia = MiPage;
  

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

  clickCom(){
    this.navCtrl.push(this.comunicacion);
  }

  clickPa(){
    this.navCtrl.push(this.papps);
  }

  clickRob(){
    this.navCtrl.push(this.robotica);
  }

  clickPyE(){
    this.navCtrl.push(this.prob);
  }

  clickMI(){
    this.navCtrl.push(this.metodologia);
  }
}
