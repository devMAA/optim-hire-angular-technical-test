import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as characterActions from './store/character.actions';
import * as characterSelector from './store/character.selectors';
import { Character } from './character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharacterComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  searchTerm:string = '';

  private characterStore$!: Subscription;

  constructor(private store: Store<{ characters: any }>) {
    this.store.dispatch(characterActions.findAllCharacters());
  }

  ngOnInit(): void {
    this.characterStore$ = this.store
      .select(characterSelector.selectAllCharacters)
      .subscribe((characters:any) => {
        this.characters = [...characters];
      });
  }

  ngOnDestroy(): void {
    this.characterStore$?.unsubscribe();
  }
}
