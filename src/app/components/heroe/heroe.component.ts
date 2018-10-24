import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

// Service
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroeService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe, 'xxxxxxxxxxxxxxxxxxx');
    });

  }

}
