import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICheckComponent } from './i-check.component';

describe('ICheckComponent', () => {
  let component: ICheckComponent;
  let fixture: ComponentFixture<ICheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
