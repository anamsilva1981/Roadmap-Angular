import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngonchanges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngonchanges.component.html',
  styleUrls: ['./ngonchanges.component.scss']
})
export class NgonchangesComponent implements OnInit, OnChanges {
  
  @Input() public title: string = 'Bem vindo';

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    console.log('Foi alterado com sucesso através do onChanges');
    
  }
}
