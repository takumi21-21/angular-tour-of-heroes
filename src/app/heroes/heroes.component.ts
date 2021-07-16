import { MessageService } from './../services/message.service';

import { HEROES } from './../mock/mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }

}
