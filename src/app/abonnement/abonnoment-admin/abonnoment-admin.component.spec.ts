import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnomentAdminComponent } from './abonnoment-admin.component';

describe('AbonnomentAdminComponent', () => {
  let component: AbonnomentAdminComponent;
  let fixture: ComponentFixture<AbonnomentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnomentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnomentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
