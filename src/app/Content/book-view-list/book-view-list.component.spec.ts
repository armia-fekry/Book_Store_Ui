import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewListComponent } from './book-view-list.component';

describe('BookViewListComponent', () => {
  let component: BookViewListComponent;
  let fixture: ComponentFixture<BookViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookViewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
