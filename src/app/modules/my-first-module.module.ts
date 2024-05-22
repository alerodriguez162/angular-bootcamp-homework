import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ModuleProviderService } from '../services/module-provider.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MySecondComponentComponent } from '../components/my-second-component/my-second-component.component';


@NgModule({
  declarations:[MyFirstComponentComponent, MySecondComponentComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MyFirstComponentComponent, MySecondComponentComponent],
  providers: [ModuleProviderService]
})

export class MyFirstModuleModule { }