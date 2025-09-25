import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/db-service/user-service/user.service';
import { CreateUser } from 'src/app/types/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //match validator yazılacak
    //confirmPassword: new FormControl(null, Validators.required),
  });
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  get name(): AbstractControl {
    return this.form.controls['name'];
  }

  get email(): AbstractControl {
    return this.form.controls['email'];
  }

  get password(): AbstractControl {
    return this.form.controls['password'];
  }

  signUp(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.isLoading = false;
    }

    this.isLoading = true;
    const value = this.form.value;
    const data: CreateUser = {
      name: value.name,
      email: value.email,
      password: value.password,
    };
    this.userService.create(data).subscribe({
      next: (user) => {
        this.authService.setUser(user);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
