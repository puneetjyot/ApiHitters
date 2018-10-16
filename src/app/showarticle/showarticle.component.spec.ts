import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowarticleComponent } from './showarticle.component';

describe('ShowarticleComponent', () => {
  let component: ShowarticleComponent;
  let fixture: ComponentFixture<ShowarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
