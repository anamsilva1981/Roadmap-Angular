import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-ngonchanges title="Olá Mundo" ></app-ngonchanges>
    <router-outlet/>
  `

})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000)
  }
}
