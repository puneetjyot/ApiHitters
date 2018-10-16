import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlebannerComponent } from './articlebanner.component';

describe('ArticlebannerComponent', () => {
  let component: ArticlebannerComponent;
  let fixture: ComponentFixture<ArticlebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
