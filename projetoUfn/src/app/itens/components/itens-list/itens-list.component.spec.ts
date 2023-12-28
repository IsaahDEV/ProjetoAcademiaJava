import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensListComponent } from './itens-list.component';

describe('ItensListComponent', () => {
  let component: ItensListComponent;
  let fixture: ComponentFixture<ItensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
