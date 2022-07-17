import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalBooksComponent } from './carousal-books.component';

describe('CarousalBooksComponent', () => {
  let component: CarousalBooksComponent;
  let fixture: ComponentFixture<CarousalBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousalBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
