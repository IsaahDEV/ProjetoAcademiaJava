import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesComponent } from './solicitacoes.component';

describe('SolicitacoesComponent', () => {
  let component: SolicitacoesComponent;
  let fixture: ComponentFixture<SolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
