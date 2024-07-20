import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="destruirComponent()">Destruir Componente</button>
    <button (click)="adicionar()">Adicionar</button>
    <!-- <app-ngonchanges title="Olá Mundo" ></app-ngonchanges> -->
    <app-ngonchanges *ngIf="destruir" ></app-ngonchanges>
    <router-outlet/>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked  {

  public valor: number = 1;
  public destruir: boolean = true;

  public adicionar(): number { 
    return this.valor += 1;
  }

  public destruirComponent(): void {
    this.destruir = false;
  }


  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  
  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}
