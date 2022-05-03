import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultVisitesComponent } from './consult-visites.component';

describe('ConsultVisitesComponent', () => {
  let component: ConsultVisitesComponent;
  let fixture: ComponentFixture<ConsultVisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
