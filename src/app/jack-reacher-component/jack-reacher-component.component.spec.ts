import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackReacherComponentComponent } from './jack-reacher-component.component';

describe('JackReacherComponentComponent', () => {
  let component: JackReacherComponentComponent;
  let fixture: ComponentFixture<JackReacherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackReacherComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackReacherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
