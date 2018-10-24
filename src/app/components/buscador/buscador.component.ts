import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
                private _heroeService: HeroeService
    ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes( params['termino'] );
      console.log(this.heroes, 'xxxxxxxxxxxxxxxxx');
    });
  }

}
