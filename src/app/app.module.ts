import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './binding/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './binding/data-binding/data-binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';
import { NgIfComponent } from './diretivas/ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    DataBindingComponent,
    EventBindingComponent,
    NgIfComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
