import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementClientComponent } from './abonnement-client.component';

describe('AbonnementClientComponent', () => {
  let component: AbonnementClientComponent;
  let fixture: ComponentFixture<AbonnementClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
