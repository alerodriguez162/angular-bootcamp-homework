import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AttributeDirectivesComponent } from '../components/Attribute directives/attribute-directives.component';

const routes: Routes = [
  { path: '', component: AttributeDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }