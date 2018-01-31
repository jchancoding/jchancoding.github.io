import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddpetComponent } from './addpet/addpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { ShowpetComponent } from './showpet/showpet.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: HomeComponent },
  { path: 'new', pathMatch: "full", component: AddpetComponent },
  { path: 'edit', component: EditpetComponent },
  { path: 'details', component: ShowpetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
