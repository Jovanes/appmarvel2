import { Component, OnInit} from '@angular/core';
import { Cadastro } from '../entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({


selector: 'cadastro-component',
templateUrl: 'cadastro.component.html',


})

export class CadastroComponent implements OnInit {

  cadastro: Cadastro = new Cadastro();


    constructor(private fire: AngularFireDatabase,
      private rota: Router
    ) { }

    ngOnInit(/*cannobary*/) {
    }



  salvar(){
    this.fire.list('cadastro').push(this.cadastro);
    this.cadastro= new Cadastro();
    this.rota.navigate(['cadastrolista']);
    }


}
