import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './components/header';
import { LoaderComponent } from './components/loader';

const components = [HeaderComponent, LoaderComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule],
  exports: [...components],
})
export class CoreModule {}
