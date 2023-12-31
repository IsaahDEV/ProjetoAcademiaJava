import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesListComponent } from './solicitacoes-list.component';

describe('SolicitacoesListComponent', () => {
  let component: SolicitacoesListComponent;
  let fixture: ComponentFixture<SolicitacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
