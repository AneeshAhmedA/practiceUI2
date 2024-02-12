import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbookComponent } from './getbook.component';

describe('GetbookComponent', () => {
  let component: GetbookComponent;
  let fixture: ComponentFixture<GetbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
