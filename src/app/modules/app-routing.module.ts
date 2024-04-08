import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRouteComponent } from '../components/simple-route/simple-route.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: 'simple', component: SimpleRouteComponent },
  { path: 'lazy', loadChildren: () => import('../modules/lazy-routing.module').then(m => m.LazyModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }