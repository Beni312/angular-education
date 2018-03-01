import { Component, OnInit } from '@angular/core';
import { Hero, HeroesService } from "./heroes.service";
import { ToasterService } from "angular5-toaster/dist";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { EditHeroComponent } from "./edit-hero/edit-hero.component";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  tableDataSource: MatTableDataSource<Hero> = new MatTableDataSource<Hero>();
  columnsToDisplay = ['id', 'name', 'power', 'alterEgo', 'actions'];

  constructor(private heroesService: HeroesService,
              private messageService: ToasterService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.heroesService.getHeroes().subscribe(response => {
      this.tableDataSource.data = response;
    });
  }

  delete(id: number) {
    this.heroesService.deleteHero(id).subscribe(() => {
      this.reload();
      this.messageService.pop('success', 'Successfully deleted!');
    });
  }

  update(hero: Hero) {
    const popup = this.dialog.open(EditHeroComponent, {
      data: hero
    });

    popup.afterClosed().subscribe(result => {
      if(!result) {
        return;
      }
      this.heroesService.update(Hero.buildHero(hero.id, result.name,  result.power, result.alterEgo)).subscribe(() => {
        this.reload();
        this.messageService.pop('success', 'Hero successfully updated!');
      });
    });
  }
}
