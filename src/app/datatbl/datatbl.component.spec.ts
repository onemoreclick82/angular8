import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatblComponent } from './datatbl.component';

describe('DatatblComponent', () => {
  let component: DatatblComponent;
  let fixture: ComponentFixture<DatatblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
