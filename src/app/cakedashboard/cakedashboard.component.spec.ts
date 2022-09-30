import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakedashboardComponent } from './cakedashboard.component';

describe('CakedashboardComponent', () => {
  let component: CakedashboardComponent;
  let fixture: ComponentFixture<CakedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
