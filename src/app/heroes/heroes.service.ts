import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Hero {
  id: number;
  name: string;
  power: string;
  alterEgo: string;

  static buildHero(id: number, name: string, power: string, alterEgo: string): Hero {
    const hero = new Hero();
    hero.id = id;
    hero.name = name;
    hero.power = power;
    hero.alterEgo = alterEgo;
    return hero;
  }
}

@Injectable()
export class HeroesService {

  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/heroes/list');
  }

  deleteHero(id: number) {
    return this.http.post('/heroes/delete', id);
  }

  update(hero: Hero) {
    return this.http.post('/heroes/update', hero);
  }
}
