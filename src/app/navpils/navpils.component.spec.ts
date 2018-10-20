import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpilsComponent } from './navpils.component';

describe('NavpilsComponent', () => {
  let component: NavpilsComponent;
  let fixture: ComponentFixture<NavpilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
