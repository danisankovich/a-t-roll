import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors = [];
  username;
  email;
  password;
  passwordConfirm;
  formShown = 'SIGNUP';
  constructor() { }

  ngOnInit(): void {
  }

  submitSignup() {
    const isValid = this.checkForm();
    if (isValid) {
      console.log({
        username: this.username, email: this.email, password: this.password, passwordConfirm: this.passwordConfirm
      })
    }
  }

  checkForm() {
    this.errors = [];
    this.checkUsername(this.username);
    this.checkEmail(this.email);
    this.checkPassword(this.password, this.passwordConfirm);

    return !this.errors.length;
  }

  checkUsername(username) {
    if (!username) {
      this.errors.push('Username is required.');
      return;
    }
    if (username && username.length < 3 || username.length > 18) {
      this.errors.push('Username must be between 3 and 18 characters long.');
    }
  }

  checkEmail(email) {
    if (!email) {
      this.errors.push('Email is required');
      return;
    }
    if (email.indexOf('@') === -1 || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
      this.errors.push('Invalid Email.')
    }
  }

  checkPassword(password, passwordConfirm) {
    if (!password || !passwordConfirm) {
      this.errors.push('Password and Password confirmation are required');
      return;
    }
    if (password !== passwordConfirm) {
      this.errors.push('Passwords do not match.');
    }

    if (password.length < 8 || password.length > 24) {
      this.errors.push('Password must be between 8 and 24 characters');
    }

    if (password.toLowerCase() === password) {
      this.errors.push('Password must contain at least one uppercase letter');
    }

    if (!/\d/.test(password)) {
      this.errors.push('Password must contain at least 1 number.')
    }
  }
}
