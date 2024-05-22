import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MyThirdComponentComponent } from '../components/my-third-component/my-third-component.component';



@NgModule({
  declarations: [
    MyThirdComponentComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [MyThirdComponentComponent],
})
export class MySecondModuleModule { }
