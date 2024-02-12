import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-getbook',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getbook.component.html',
  styleUrl: './getbook.component.css'
})
export class GetbookComponent {
  books: Book[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.bookDetails();
  }

  bookDetails() {
    this.http
      .get<Book[]>('http://localhost:5134/api/Book')
      .subscribe(
        (response) => {
          this.books = response;
          console.log(this.books);
        },
        (error) => {
          console.error('Error fetching books:', error);
        }
      );
      
  }
  
}
