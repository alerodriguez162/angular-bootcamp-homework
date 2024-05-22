import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { ModuleProviderService } from './services/module-provider.service';
import { RootInjectableService } from './services/root-injectable.service';
import { MyFirstModuleModule } from './modules/my-first-module.module';
import { MySecondModuleModule } from './modules/my-second-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MyFirstModuleModule,
    MySecondModuleModule,
  ],
  providers: [
    ModuleProviderService,
    RootInjectableService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
