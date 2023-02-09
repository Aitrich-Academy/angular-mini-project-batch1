import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidSectionComponent } from './covid-section.component';

describe('CovidSectionComponent', () => {
  let component: CovidSectionComponent;
  let fixture: ComponentFixture<CovidSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
