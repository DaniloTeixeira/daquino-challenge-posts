import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/post/post.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('post', reducers)],
})
export class CoreModule {}
