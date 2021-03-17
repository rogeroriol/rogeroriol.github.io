import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import firebase from 'firebase/app';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Atribut navbar
  public user: firebase.User;
  public visible: boolean;

  

  constructor(private fireauth: FirebaseauthService, private firestore: FirebasedbService, private router: Router, private activatedrouter: ActivatedRoute) { 

    this.activatedrouter.fragment.subscribe(
      (originalURL : string) =>{
        console.log(originalURL);
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

  logout(){
    this.fireauth.logout();
  }

}
