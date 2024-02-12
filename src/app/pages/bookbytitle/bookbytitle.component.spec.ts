import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbytitleComponent } from './bookbytitle.component';

describe('BookbytitleComponent', () => {
  let component: BookbytitleComponent;
  let fixture: ComponentFixture<BookbytitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookbytitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookbytitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
