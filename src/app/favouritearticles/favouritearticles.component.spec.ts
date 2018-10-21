import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritearticlesComponent } from './favouritearticles.component';

describe('FavouritearticlesComponent', () => {
  let component: FavouritearticlesComponent;
  let fixture: ComponentFixture<FavouritearticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritearticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
