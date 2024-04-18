import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `

    <h2>Two Way binding</h2>
    <input [(ngModel)]="nome">
    {{ nome }}

  `,
})
export class TwoWayBindingComponent {
nome: any;

}
