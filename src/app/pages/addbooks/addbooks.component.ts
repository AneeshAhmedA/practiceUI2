import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent {
  book: Book;
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.book = new Book();
  }

  addBook() {
    this.http.post('http://localhost:5134/api/Book', this.book, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log(response);
          this.successMessage = 'Book created successfully.';
        },
        (error) => {
          console.error('Error adding Book:', error);
          this.successMessage = '';
        }
      );
  }
}
