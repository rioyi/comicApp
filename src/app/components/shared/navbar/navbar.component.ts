import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(  private heroesService: HeroeService,
                private route: Router
  ) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {

    console.log(termino);
    this.route.navigate(['/buscar', termino]);


  }

}
