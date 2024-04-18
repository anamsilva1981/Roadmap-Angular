import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h2>Diretivas estruturais</h2>
    <app-data-binding *ngIf="destruir" ></app-data-binding>
    <br>
    <button (click)="destruirComponente()">Destruir</button>
    <app-event-binding *ngIf="condition; else elseBlock"></app-event-binding>
    <ng-template #elseBlock>
      <p>Falso</p>
    </ng-template>
  `,
})
export class NgIfComponent implements OnInit{

  public destruir: boolean = true;
  public condition: boolean = true;
  public conditionClick: boolean = true;


  public ngOnInit(){
    setInterval( ()=> {
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public destruirComponente(){
    this.destruir = !this.destruir
  }

}
