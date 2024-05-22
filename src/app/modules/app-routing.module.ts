import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectivesComponent } from '../components/Structural directives/structural-directives.component';

const routes: Routes = [
  { path: '', component: StructuralDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }