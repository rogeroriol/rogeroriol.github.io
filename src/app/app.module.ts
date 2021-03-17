import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworksComponent } from './pages/homeworks/homeworks.component';
import { HomeworkdetailComponent } from './pages/homeworkdetail/homeworkdetail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CreateDocumentComponent } from './pages/admin/create-document/create-document.component';
import { UpdateDocumentComponent } from './pages/admin/update-document/update-document.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeworksComponent,
    HomeworkdetailComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CreateDocumentComponent,
    UpdateDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CKEditorModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
