import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as episodeActions from './store/episode.actions';
import * as episodeSelector from './store/episode.selectors';
import { Episode } from './episode';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodeComponent implements OnInit, OnDestroy {
  episodes: Episode[] = [];
  searchTerm:string = '';

  private episodeStore$!: Subscription;

  constructor(private store: Store<{ episodes: any }>) {
    this.store.dispatch(episodeActions.findAllEpisodes());
  }

  ngOnInit(): void {
    this.episodeStore$ = this.store
      .select(episodeSelector.selectAllEpisodes)
      .subscribe((episodes:any) => {
        this.episodes = [...episodes];
      });
  }

  ngOnDestroy(): void {
    this.episodeStore$?.unsubscribe();
  }
}
