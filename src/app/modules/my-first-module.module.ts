import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ModuleProviderService } from '../services/module-provider.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

const routes: Routes = [
  {path: "", component: MyFirstComponentComponent}
];

@NgModule({
  declarations:[MyFirstComponentComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, MaterialModule],
  exports: [RouterModule, MyFirstComponentComponent],
  providers: [ModuleProviderService]
})

export class MyFirstModuleModule { }