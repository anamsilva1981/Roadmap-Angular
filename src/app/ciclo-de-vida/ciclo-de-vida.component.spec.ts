import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaComponent } from './ngonchanges.component';

describe('CicloDeVidaComponent', () => {
  let component: CicloDeVidaComponent;
  let fixture: ComponentFixture<CicloDeVidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CicloDeVidaComponent]
    });
    fixture = TestBed.createComponent(CicloDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
