import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { delay } from 'rxjs/operators';
import { CreateCategory } from 'src/app/types/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private dbService: NgxIndexedDBService) {}

  getCategoryById(id: number) {
    return this.dbService.getByID('categories', +id).pipe(delay(2000));
  }
  getAllCategories(userId: number) {
    return this.dbService
      .getAllByIndex('categories', 'userId', IDBKeyRange.only(userId))
      .pipe(delay(2000));
  }
  deleteCategoryById(id: number) {
    return this.dbService.deleteByKey('categories', +id).pipe(delay(2000));
  }
  create(data: CreateCategory) {
    return this.dbService.add('categories', data).pipe(delay(2000));
  }
}
