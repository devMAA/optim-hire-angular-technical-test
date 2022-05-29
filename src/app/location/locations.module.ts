import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LocationsRoutingModule } from './locations-router.module';
import { LocationStoreModule } from './store/location-store.module';

import { LocationComponent } from './locations.component';

@NgModule({
  declarations: [LocationComponent, ...LocationsRoutingModule.components],
  imports: [LocationsRoutingModule, LocationStoreModule, SharedModule],
  exports: [LocationComponent],
})
export class LocationModule {}
