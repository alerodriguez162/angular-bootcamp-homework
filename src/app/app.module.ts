import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { ModuleProviderService } from './services/module-provider.service';
import { RootInjectableService } from './services/root-injectable.service';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { BlogModule } from './modules/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
    LazyLoadingComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BlogModule
  ],
  providers: [
    ModuleProviderService,
    RootInjectableService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
