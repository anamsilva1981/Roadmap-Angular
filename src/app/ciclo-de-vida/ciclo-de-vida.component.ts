import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ciclodevida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() public title: string = 'Bem vindo';

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    console.log('Foi alterado com sucesso através do onChanges');
  }

  public ngOnDestroy(): void {
    console.log('Componente CicloDeVidaComponent destruido')
  }
}
