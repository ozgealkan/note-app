import { Injectable } from '@angular/core';
import { LoginRequest, User } from 'src/app/types/User';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../db-service/user-service/user.service';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string | null;
  private user: User | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }

    window.addEventListener('storage', (event) => {
      if ((event.key === 'token' || event.key === 'user') && !event.newValue) {
        this.router.navigate(['/login']);
      }
    });
  }

  get isAuthenticated() {
    return !!this.token;
  }

  login(req: LoginRequest): Observable<User | null> {
    return this.userService.get(req.email).pipe(
      map((user) => {
        if (!user) {
          throw new Error('user not found!');
        }

        if (user.password !== req.password) {
          throw new Error('invalid password!');
        }

        this.setUser(user);

        return user;
      }),
    );
  }

  setToken(): void {
    this.token = uuidv4();
    localStorage.setItem('token', this.token);
  }

  deleteToken(): void {
    this.token = null;
    localStorage.removeItem('token');
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.setToken();
  }

  removeUser(): void {
    localStorage.removeItem('user');
  }
}
