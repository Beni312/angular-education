import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Hero, HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesResolver implements Resolve<Hero[]> {

  constructor(private heroesService: HeroesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    return this.heroesService.getHeroes();
  }
}
