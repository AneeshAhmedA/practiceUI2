import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/user';
@Component({
  selector: 'app-template-driven-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = new User();

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    this.http.post('http://localhost:5134/api/User/Register', this.user)
      .subscribe(
        (response) => {
          console.log('User registered successfully:', response);
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
  }
}