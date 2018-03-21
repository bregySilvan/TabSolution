import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLogicComponent } from './post-logic.component';

describe('PostLogicComponent', () => {
  let component: PostLogicComponent;
  let fixture: ComponentFixture<PostLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
