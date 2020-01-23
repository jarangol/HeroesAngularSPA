import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: []
})
export class ResultsComponent implements OnInit {
  heroes:any[] = [];
  term:string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this._heroesService.searchHeroes(this.term);
    });
  }

  seeHero(index:number){
    this.router.navigate(['/hero',index]);
  }

}
