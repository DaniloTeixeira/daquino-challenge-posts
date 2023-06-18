import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list';
import { PostDetailsComponent } from './components/post-details';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/core/components/components.module';

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

    ComponentsModule,
  ],
  exports: [...components],
})
export class PostModule {}
