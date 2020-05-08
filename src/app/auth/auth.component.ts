import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.error = null;
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          this.isLoading = false;
          console.log(resData);
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
          this.error = 'An error occured!';
        }
      );
    }

    form.reset();
  }
}
