import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from  './componentes/cadastro/cadastro.component';
import {HistoriaComponent} from  './componentes/historia/historia.component';
import {OpçoesComponent} from  './componentes/opçoes/opçoes.component';
import {QuizComponent} from  './componentes/quiz/quiz.component';
import {HomemdeferroComponent} from  './componentes/homemdeferro/homemdeferro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'opçoes', component: OpçoesComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'homemdeferro', component: HomemdeferroComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
