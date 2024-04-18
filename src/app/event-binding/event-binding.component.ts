import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>event-binding !</h2>

    <button (click)=eventBinding()> Event binding</button>
    <hr>
    <br>
    <button (click)="eventBinding2('Deu certo')"> Event binding com parametro </button>
    <hr>
    <br>
    <button (click)="evento($event)" >Evento </button>
    <hr>
    <br>
    <div (mousemove)="mousemoveTest($event)" style="background: red; width: 300px; height: 300px"></div>
    <p>Position X </p> {{ position.x }}
    <p>Position Y </p> {{ position.y }}
  `,
})
export class EventBindingComponent {

  public position: {x: number; y: number} = { x: 0, y: 0}

  public eventBinding(){
    alert('Event binding')
  }

  public eventBinding2(valor: string){
    alert(valor)
  }

  public evento(evento: MouseEvent){
    console.log(evento);
  }

  public mousemoveTest(valor: MouseEvent){
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }


}
