import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[] = [];
  constructor(private _heroesService: HeroesService,
              private router:Router
              ) { 

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  
  seeHero(index:number){
    console.log("called");
    this.router.navigate(['/hero',index]);
  }
}
