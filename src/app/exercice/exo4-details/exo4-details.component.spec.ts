import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo4DetailsComponent } from './exo4-details.component';

describe('Exo4DetailsComponent', () => {
  let component: Exo4DetailsComponent;
  let fixture: ComponentFixture<Exo4DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo4DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo4DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
