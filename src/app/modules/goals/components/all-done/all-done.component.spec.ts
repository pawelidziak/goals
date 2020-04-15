import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoneComponent } from '@src/app/modules/goals/components/all-done/all-done.component';

describe('AllDoneComponent', () => {
  let component: AllDoneComponent;
  let fixture: ComponentFixture<AllDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
