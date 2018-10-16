import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlebodyComponent } from './articlebody.component';

describe('ArticlebodyComponent', () => {
  let component: ArticlebodyComponent;
  let fixture: ComponentFixture<ArticlebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
