import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/core/core.reducer';
import { HeaderComponent } from './components/header';

const components = [HeaderComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, StoreModule.forFeature('core', reducers)],
  exports: [...components],
})
export class CoreModule {}
