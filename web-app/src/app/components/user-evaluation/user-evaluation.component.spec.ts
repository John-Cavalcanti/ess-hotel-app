import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEvaluationComponent } from './user-evaluation.component';

describe('UserEvaluationComponent', () => {
  let component: UserEvaluationComponent;
  let fixture: ComponentFixture<UserEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
