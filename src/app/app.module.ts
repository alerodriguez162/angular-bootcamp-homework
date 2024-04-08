import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './components/Attribute directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/Structural directives/structural-directives.component';
import { CustomDirectivesComponent } from './components/Custom directives/custom-directives.component';
import { DataBindingComponent } from './components/Data-binding/data-binding.component';
import { ModulesComponent } from './components/Modules/modules.component';
import { InjectablesComponent } from './components/Injectables/injectables.component';
import { PipesComponent } from './components/Pipes/pipes.component';
import { MaterialComponent } from './components/Material/material.component';
import { RoutingComponent } from './components/Routing/routing.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { ModuleProviderService } from './services/module-provider.service';
import { RootInjectableService } from './services/root-injectable.service';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    CustomDirectivesComponent,
    DataBindingComponent,
    ModulesComponent,
    InjectablesComponent,
    PipesComponent,
    MaterialComponent,
    RoutingComponent,
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
