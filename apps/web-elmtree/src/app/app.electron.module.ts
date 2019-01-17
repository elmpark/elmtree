import { NgModule } from '@angular/core';
import { EtElectronCoreModule } from '@elmtree/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, EtElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
