import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const components = [LoaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [...components],
})
export class ComponentsModule {}
