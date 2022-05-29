import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EpisodesState, featureKey, adapter } from './episode.state';
import * as episodeActions from './episode.actions';

const { selectEntities, selectAll } = adapter.getSelectors();

const getEpisodeState = createFeatureSelector<EpisodesState>(featureKey);

const selectEpisodeEntities = createSelector(
  getEpisodeState,
  selectEntities
);

const selectEpisodeSensorId = createSelector(
  getEpisodeState,
  (state: EpisodesState) => state.selectedId
);

export const selectAllEpisodes = createSelector(getEpisodeState, selectAll);

export const selectCurrentEpisode = createSelector(
  selectEpisodeEntities,
  selectEpisodeSensorId,
  (userEntities, userId) => userId && userEntities[userId]
);
