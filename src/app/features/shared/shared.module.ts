import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './components/loader';

const components = [LoaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatSnackBarModule, MatProgressSpinnerModule],
  exports: [...components],
})
export class SharedModule {}
