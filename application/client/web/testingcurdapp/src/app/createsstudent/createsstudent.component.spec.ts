import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesstudentComponent } from './createsstudent.component';

describe('CreatesstudentComponent', () => {
  let component: CreatesstudentComponent;
  let fixture: ComponentFixture<CreatesstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});