import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
 
@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './bookbyid.component.html',
  styleUrls: ['./bookbyid.component.css']
})
export class BookbyidComponent {
  bookId?: number = 0;
  book: Book;
  errMsg: String = '';
  isBookExist: boolean = false;
  originalBook: Book = {} as Book;
 
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.book = new Book();
    this.activateRoute.params.subscribe((params) => (this.bookId = params['rid']));
    console.log(this.bookId);
    this.search();
  }
 
  search() {
    this.http
      .get<Book>('http://localhost:5134/api/Book/' + this.bookId)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.book = response;
          this.originalBook = { ...this.book };
          this.isBookExist = true;
          this.errMsg = '';

        } else {
          this.errMsg = 'Invalid Book Id';
          this.isBookExist = false;
        }
      });
  }
 
  updateBook() {
    this.http.put('http://localhost:5134/api/Book/' + this.bookId, this.book)
      .subscribe(
        (response) => {
          console.log('Book updated successfully:', response);
          this.router.navigateByUrl('admin-dashboard/getbook');
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
     
      this.router.navigateByUrl('admin-dashboard/getbook');
  }
 
  delete() {
    this.bookId = this.book.bookId;
    this.http
      .delete('http://localhost:5134/api/Book/' + this.bookId)
      .subscribe(
        (response) => {
          console.log('Book deleted successfully:', response);
          this.router.navigateByUrl('admin-dashboard/getbook');
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
      this.router.navigateByUrl('admin-dashboard/getbook');
  }
}  