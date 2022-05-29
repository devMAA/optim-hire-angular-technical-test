import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CharactersRoutingModule } from './characters-router.module';
import { CharacterStoreModule } from './store/character-store.module';

import { CharacterComponent } from './characters.component';

@NgModule({
  declarations: [CharacterComponent, ...CharactersRoutingModule.components],
  imports: [CharactersRoutingModule, CharacterStoreModule, SharedModule],
  exports: [CharacterComponent],
})
export class CharacterModule {}
