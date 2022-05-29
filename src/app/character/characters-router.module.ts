import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './characters.component';

export const CharacterRoutes: Routes = [
  {
    path: 'characters',
    children: [
      {
        path: '',
        component: CharacterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CharacterRoutes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {
  static components = [CharacterComponent];
}
