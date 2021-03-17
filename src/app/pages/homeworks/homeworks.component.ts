import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Homework } from 'src/app/models/homework';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import firebase from 'firebase/app';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';


@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent implements OnInit {

  public homeworks: Homework[];
  public user: firebase.User;
  

  constructor(private fireauth: FirebaseauthService, private firedb: FirebasedbService, private router: Router) {

    this.firedb.getDocuments().subscribe(
      (originHomeworks: Homework[]) => {
        this.homeworks = originHomeworks;
      }
    );

  }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
    (originalUser: firebase.User) => {
      this.user = originalUser;
      console.log("Holaaa" + this.user);
      }
    )
  }

  seeDetails(id: number) {
    this.router.navigate(["homeworks", id]);
  }

  updateDocument(id: number) {
  
    this.router.navigate(["homeworks/admin/updateDocument", id]);
  }

  createElement() {
    this.router.navigate(["homeworks/admin/createDocument"]);
  }

  deleteHomework(id: string) {
    console.log(id);
    this.firedb.deleteHomework(this.homeworks[id].id);
  }


}
