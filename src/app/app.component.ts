import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { apiUrl } from '../utils/api';
import { emailRegex } from '../utils/regex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app-angular';
  email = '';
  password = '';
  isValidLogin = true;

  constructor(private http : HttpClient) {}

  public validateLogin() {
    if (!this.email.match(emailRegex) && this.password.length < 6) {
    this.isValidLogin = false;
    } else {
        this.onLoginRequest();
    }
}
public async onLoginRequest() {
    const data = { email: this.email, password: this.password };
    try {
        this.http.post<any>(`${apiUrl}/signin`, data).subscribe(data => {
          localStorage.setItem('token', data.accessToken);
          this.isValidLogin = true;
        })
    } catch {
        this.isValidLogin = false;
    }
}
}
