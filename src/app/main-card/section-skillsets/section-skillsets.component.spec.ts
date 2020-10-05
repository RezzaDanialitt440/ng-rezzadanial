import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkillsetsComponent } from './section-skillsets.component';

describe('SectionSkillsetsComponent', () => {
  let component: SectionSkillsetsComponent;
  let fixture: ComponentFixture<SectionSkillsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSkillsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSkillsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
