import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaloonsComponent } from './baloons.component';

describe('BaloonsComponent', () => {
  let component: BaloonsComponent;
  let fixture: ComponentFixture<BaloonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaloonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
