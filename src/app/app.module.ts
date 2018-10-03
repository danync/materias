import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CsPage } from '../pages/cs/cs';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { ComunicaciónPage } from '../pages/comunicaci\u00F3n/comunicaci\u00F3n';
import { PappsPage } from '../pages/papps/papps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage,
    DibujoPage,
    ComunicaciónPage,
    PappsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage,
    DibujoPage,
    ComunicaciónPage,
    PappsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
