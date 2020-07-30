import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XyzUserListComponent }  from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: XyzUserListComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class routing { }
