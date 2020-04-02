import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReachComponent } from './section-reach.component';

describe('SectionReachComponent', () => {
  let component: SectionReachComponent;
  let fixture: ComponentFixture<SectionReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
