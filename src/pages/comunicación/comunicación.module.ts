import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComunicaciónPage } from './comunicación';

@NgModule({
  declarations: [
    ComunicaciónPage,
  ],
  imports: [
    IonicPageModule.forChild(ComunicaciónPage),
  ],
})
export class ComunicaciónPageModule {}
