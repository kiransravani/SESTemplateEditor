import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputjsonComponent } from './inputjson.component';

describe('InputjsonComponent', () => {
  let component: InputjsonComponent;
  let fixture: ComponentFixture<InputjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
