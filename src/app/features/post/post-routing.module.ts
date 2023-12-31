import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details';
import { PostListComponent } from './components/post-list';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
