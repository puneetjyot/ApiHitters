import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartbarComponent } from './smartbar.component';

describe('SmartbarComponent', () => {
  let component: SmartbarComponent;
  let fixture: ComponentFixture<SmartbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
