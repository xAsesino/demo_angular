import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo4ListsComponent } from './exo4-lists.component';

describe('Exo4ListsComponent', () => {
  let component: Exo4ListsComponent;
  let fixture: ComponentFixture<Exo4ListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo4ListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo4ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
