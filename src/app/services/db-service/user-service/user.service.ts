import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { delay, Observable } from 'rxjs';
import { CreateUser, User } from 'src/app/types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private dbService: NgxIndexedDBService) {}

  get(email: string): Observable<User> {
    return this.dbService.getByIndex<User>('users', 'email', email).pipe(delay(2000));
  }

  create(data: CreateUser): Observable<User> {
    return this.dbService.add<CreateUser>('users', data).pipe(delay(2000));
  }

  getAll(): Observable<User[]> {
    return this.dbService.getAll<User>('users').pipe(delay(2000));
  }
}
