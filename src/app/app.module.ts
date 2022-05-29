import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CharacterModule } from './character/characters.module';
import { LocationStoreModule } from './location/store/location-store.module';
import { LocationModule } from './location/locations.module';
import { EpisodeModule } from './episode/episodes.module';

const APP_ROUTES: Routes = [
  { path: ' ', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'locations', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'episodes', redirectTo: 'episodes', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'characters',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CharacterModule,
    EpisodeModule,
    LocationModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
