import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedesinterComponent } from './demandedesinter.component';

describe('DemandedesinterComponent', () => {
  let component: DemandedesinterComponent;
  let fixture: ComponentFixture<DemandedesinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedesinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandedesinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
