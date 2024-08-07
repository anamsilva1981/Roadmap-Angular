import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CicloDeVidaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
