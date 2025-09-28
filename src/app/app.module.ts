import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { dbConfig } from 'src/db.config';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterComponent } from './components/filter/filter.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { NotesComponent } from './components/notes/notes.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { NotePreviewComponent } from './components/notes/note-preview/note-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    FilterComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    NotesComponent,
    CreateNoteComponent,
    NotePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [NgxIndexedDBService],
  bootstrap: [AppComponent],
})
export class AppModule {}
