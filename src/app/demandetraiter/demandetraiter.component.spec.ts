import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandetraiterComponent } from './demandetraiter.component';

describe('DemandetraiterComponent', () => {
  let component: DemandetraiterComponent;
  let fixture: ComponentFixture<DemandetraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandetraiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandetraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
