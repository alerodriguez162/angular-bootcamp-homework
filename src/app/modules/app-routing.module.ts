import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CustomDirectivesComponent } from '../components/Custom directives/custom-directives.component';

const routes: Routes = [
  { path: '', component: CustomDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }