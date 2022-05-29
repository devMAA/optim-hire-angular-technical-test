import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CharacterEffects } from './character.effects';
import { reducer } from './character.reducer';
import { featureKey } from './character.state';

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([CharacterEffects])
  ]
})
export class CharacterStoreModule { }
