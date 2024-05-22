import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDirectivesComponent } from './components/Custom directives/custom-directives.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { ModuleProviderService } from './services/module-provider.service';
import { RootInjectableService } from './services/root-injectable.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    CapitalizeDirective
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    ModuleProviderService,
    RootInjectableService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
