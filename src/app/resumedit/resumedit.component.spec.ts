import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeditComponent } from './resumedit.component';

describe('ResumeditComponent', () => {
  let component: ResumeditComponent;
  let fixture: ComponentFixture<ResumeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
