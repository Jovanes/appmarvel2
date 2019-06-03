import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from  './componentes/cadastro/cadastro.component';
import {HistoriaComponent} from  './componentes/historia/historia.component';
import {OpçoesComponent} from  './componentes/opçoes/opçoes.component';
import {QuizComponent} from  './componentes/quiz/quiz.component';



import {HomemdeferroComponent} from  './componentes/homemdeferro/homemdeferro.component';


@NgModule({
  declarations: [AppComponent,CadastroComponent,HistoriaComponent,OpçoesComponent,QuizComponent,HomemdeferroComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
