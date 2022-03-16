import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2ListComponent } from './exo2-list/exo2-list.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4DetailsComponent } from './exo4-details/exo4-details.component';
import { Exo4ListsComponent } from './exo4-lists/exo4-lists.component';

const routes: Routes = [
  { path: "exo1", component: Exo1Component },
  { path: "exo2", component: Exo2ListComponent },
  { path: "exo3", component: Exo3Component },
  { path: "exo4-lists", component: Exo4ListsComponent },
  {path : "exo4-details/:id", component : Exo4DetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
