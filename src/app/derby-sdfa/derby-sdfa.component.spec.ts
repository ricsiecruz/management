import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerbySdfaComponent } from './derby-sdfa.component';

describe('DerbySdfaComponent', () => {
  let component: DerbySdfaComponent;
  let fixture: ComponentFixture<DerbySdfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerbySdfaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerbySdfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
