import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityRegisterComponent } from './electricity-register.component';

describe('ElectricityRegisterComponent', () => {
  let component: ElectricityRegisterComponent;
  let fixture: ComponentFixture<ElectricityRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
