import { Action, createReducer, on } from '@ngrx/store';
import * as episodeState from './episode.state';
import * as episodeActions from './episode.actions';

const episodeReducer = createReducer(
  episodeState.initialstate,
  // SELECT ONE
  on(episodeActions.SelectEpisode, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  // FIND ALL
  on(episodeActions.findAllEpisodes, (state) => ({
    ...state,
    action: episodeActions.type.FIND_ALL_EPISODES,
    loading: true,
    error: null,
  })),
  on(episodeActions.findAllEpisodesSuccess, (state, { episodes }) => {
    return episodeState.adapter.addMany(episodes, {
      ...state,
      loading: false,
    });
  }),
  on(episodeActions.findAllEpisodesFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  }))
);

export function reducer(state: episodeState.EpisodesState, action: Action) {
  return episodeReducer(state, action);
}
