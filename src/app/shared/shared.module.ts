import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SearchFilterPipe } from './searchFilter.pipe';

@NgModule({
  declarations: [SearchFilterPipe],
  imports: [CommonModule, MaterialModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SearchFilterPipe,
  ],
})
export class SharedModule {}
