import { createAction, props } from '@ngrx/store';
import { Episode } from '../episode';

export enum type {
  SELECT_EPISODE = '[ Episode ] Select a Episode',
  FIND_ALL_EPISODES = '[ Episode ] Find All Episodes',
  FIND_ALL_EPISODES_FAIL = '[ Episode ] Find All Episodes Fail',
  FIND_ALL_EPISODES_SUCCESS = '[ Episode ] Find All Episodes Success',
}

export const SelectEpisode = createAction(
  type.SELECT_EPISODE,
  props<{ id: string }>()
);
export const findAllEpisodes = createAction(type.FIND_ALL_EPISODES);
export const findAllEpisodesFail = createAction(
  type.FIND_ALL_EPISODES_FAIL,
  props<{ error: any }>()
);
export const findAllEpisodesSuccess = createAction(
  type.FIND_ALL_EPISODES_SUCCESS,
  props<{ episodes: Array<Episode> }>()
);
