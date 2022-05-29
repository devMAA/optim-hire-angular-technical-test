import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as locationActions from './store/location.actions';
import * as locationSelector from './store/location.selectors';
import { Location } from './location';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
  locations: Location[] = [];
  searchTerm:string = '';
  private locationStore$!: Subscription;

  constructor(private store: Store<{ locations: any }>) {
    this.store.dispatch(locationActions.findAllLocations());
  }

  ngOnInit(): void {
    this.locationStore$ = this.store
      .select(locationSelector.selectAllLocations)
      .subscribe((locations:any) => {
        this.locations = [...locations];
      });
  }

  ngOnDestroy(): void {
    this.locationStore$?.unsubscribe();
  }
}
