import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CreateNote, Note } from 'src/app/types/Note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private dbService: NgxIndexedDBService) {}

  getNoteById(id: number) {
    return this.dbService.getByID('notes', +id).pipe(delay(2000));
  }
  getAllNotes(userId: number): Observable<Note[]> {
    return this.dbService
      .getAllByIndex<Note>('notes', 'userId', IDBKeyRange.only(userId))
      .pipe(delay(2000));
  }
  deleteNoteById(id: number) {
    return this.dbService.deleteByKey('notes', +id).pipe(delay(2000));
  }
  create(data: CreateNote) {
    return this.dbService.add('notes', data).pipe(delay(2000));
  }
}
