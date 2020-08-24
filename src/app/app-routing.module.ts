import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { UserComponent } from './routes/user/user.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: HomeComponent,
  },
  {
    path: 'search/:input',
    component: SearchComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'user/:id',
    component: UserComponent,
    data: { animation: 'isRight' },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
