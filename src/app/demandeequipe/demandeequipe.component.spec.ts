import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeequipeComponent } from './demandeequipe.component';

describe('DemandeequipeComponent', () => {
  let component: DemandeequipeComponent;
  let fixture: ComponentFixture<DemandeequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
