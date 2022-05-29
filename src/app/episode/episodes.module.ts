import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EpisodesRoutingModule } from './episodes-router.module';
import { EpisodeStoreModule } from './store/episode-store.module';

import { EpisodeComponent } from './episodes.component';

@NgModule({
  declarations: [EpisodeComponent, ...EpisodesRoutingModule.components],
  imports: [EpisodesRoutingModule, EpisodeStoreModule, SharedModule],
  exports: [EpisodeComponent],
})
export class EpisodeModule {}
