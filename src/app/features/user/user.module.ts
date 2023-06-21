import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './components/user-details';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PostModule } from '../post/post.module';
import { CoreModule } from 'src/app/core/core.module';

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
    CoreModule,
  ],
  exports: [...components],
})
export class UserModule {}
