import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './components/user-details';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PostModule } from '../post/post.module';
import { ComponentsModule } from 'src/app/core/components/components.module';

const components = [UserDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

    PostModule,
    ComponentsModule,
  ],
  exports: [...components],
})
export class UserModule {}
