import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngonchanges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngonchanges.component.html',
  styleUrls: ['./ngonchanges.component.scss']
})
export class NgonchangesComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() public title: string = 'Bem vindo';

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    console.log('Foi alterado com sucesso através do onChanges');
  }

  public ngOnDestroy(): void {
    console.log('Componente NgonchangesComponent destruido')
  }
}
