import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDocumentComponent } from './pages/admin/create-document/create-document.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeworkdetailComponent } from './pages/homeworkdetail/homeworkdetail.component';
import { HomeworksComponent } from './pages/homeworks/homeworks.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { UpdateDocumentComponent } from './pages/admin/update-document/update-document.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['homeworks']);


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  {
    path: 'homeworks', children:
      [
        { path: '', component: HomeworksComponent },
        { path: ':id', component: HomeworkdetailComponent }
      ]
  },
  { path: 'homeworks/admin/createDocument', component: CreateDocumentComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },

  {
    path: 'homeworks/admin/updateDocument', children:
      [
        { path: ':id', component: UpdateDocumentComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
