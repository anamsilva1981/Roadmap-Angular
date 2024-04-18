import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <hr>
    <h2> Property Binding </h2>
    <button [disabled]="disableTeste">Property binding</button>

    <img [src]="imgSrc" [title]="imgTitle" [alt]="imgTitle">
  `,
})
export class DataBindingComponent {

  public disableTeste: boolean = true;
  public imgTitle: string = "Property bindinhg"

  public imgSrc = "./assets/nuvem.jpg";

}
