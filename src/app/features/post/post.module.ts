import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list';
import { PostDetailsComponent } from './components/post-details';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import { postReducers } from './store/post.reducer';

const components = [PostListComponent, PostDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    PostRoutingModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,

    CoreModule,

    StoreModule.forFeature('post', postReducers),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports: [...components],
})
export class PostModule {}
