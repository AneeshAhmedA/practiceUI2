import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbyidComponent } from './bookbyid.component';

describe('BookbyidComponent', () => {
  let component: BookbyidComponent;
  let fixture: ComponentFixture<BookbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
