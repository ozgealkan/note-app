import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotesComponent } from './components/notes/notes.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'recent-notes',
        component: NotesComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'create-note',
        component: CreateNoteComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recent-notes',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
