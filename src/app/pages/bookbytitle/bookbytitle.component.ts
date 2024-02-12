import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-bookbytitle',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './bookbytitle.component.html',
  styleUrl: './bookbytitle.component.css'
})
export class BookbytitleComponent {
  title: string | undefined;
  book: Book;
  errMsg: string = '';
  isBookExist: boolean = false;

  constructor(private http: HttpClient) { 
    this.book = new Book();
  }

  searchBook() {
    this.http
      .get<Book>('http://localhost:5134/api/Book/title/' + this.title)
      .subscribe(
        (response) => {
          console.log(response);
          if (response != null) {
            this.book = response;
            this.isBookExist = true;
            this.errMsg = '';
          } else {
            this.errMsg = 'Book with title "' + this.title + '" not found';
            this.isBookExist = false;
          }
        },
        (error) => {
          console.error('Error getting book by title:', error);
          this.errMsg = 'Error getting book by title';
          this.isBookExist = false;
        }
      );
  }
}

