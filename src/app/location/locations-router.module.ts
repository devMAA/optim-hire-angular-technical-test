import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './locations.component';

export const LocationRoutes: Routes = [
  {
    path: 'locations',
    children: [
      {
        path: '',
        component: LocationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(LocationRoutes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {
  static components = [LocationComponent];
}
