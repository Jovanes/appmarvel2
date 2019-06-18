import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from  './componentes/cadastro/cadastro.component';
import {HistoriaComponent} from  './componentes/historia/historia.component';
import {OpçoesComponent} from  './componentes/opçoes/opçoes.component';
import {QuizComponent} from  './componentes/quiz/quiz.component';
import {FormsModule} from '@angular/forms';
import {CadastrolistaComponent} from  './componentes/cadastrolista/cadastrolista.component';



import {HomemdeferroComponent} from  './componentes/homemdeferro/homemdeferro.component';


@NgModule({
  declarations: [AppComponent,CadastroComponent,HistoriaComponent,OpçoesComponent,QuizComponent,HomemdeferroComponent,CadastrolistaComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireDatabaseModule,
AngularFireModule.initializeApp({
  apiKey: "AIzaSyCYXuAqZbnRZ6DRTV0wN1VuoBzn28Csevg",
   authDomain: "appmarvel-4e81f.firebaseapp.com",
   databaseURL: "https://appmarvel-4e81f.firebaseio.com",
   projectId: "appmarvel-4e81f",
   storageBucket: "appmarvel-4e81f.appspot.com",
   messagingSenderId: "231558684347",
   appId: "1:231558684347:web:c91cdeda4f559c5f"
})

],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
