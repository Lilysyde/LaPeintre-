import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisuisjeComponent } from './quisuisje.component';

describe('QuisuisjeComponent', () => {
  let component: QuisuisjeComponent;
  let fixture: ComponentFixture<QuisuisjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuisuisjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuisuisjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
