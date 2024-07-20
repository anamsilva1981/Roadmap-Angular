import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { TittleComponent } from './ciclo-de-vida/tittle/tittle.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloDeVidaComponent,
    TittleComponent
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
