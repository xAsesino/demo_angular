import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo4AddComponent } from './exo4-add.component';

describe('Exo4AddComponent', () => {
  let component: Exo4AddComponent;
  let fixture: ComponentFixture<Exo4AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo4AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo4AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
