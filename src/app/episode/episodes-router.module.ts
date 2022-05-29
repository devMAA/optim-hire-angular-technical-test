import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episodes.component';

export const EpisodeRoutes: Routes = [
  {
    path: 'episodes',
    children: [
      {
        path: '',
        component: EpisodeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(EpisodeRoutes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {
  static components = [EpisodeComponent];
}
