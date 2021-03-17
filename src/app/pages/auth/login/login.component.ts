import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showBar = false;

  

    


  public loginError: boolean = false;
  public allowUserError: boolean = false;

  public user: firebase.User;

  constructor(private fireauth: FirebaseauthService, private firestore: FirebasedbService, private router: Router, private acrouter: ActivatedRoute) { 

    
  }

  ngOnInit(): void {

    this.acrouter.fragment
    .subscribe((fragment: string) => {
      console.log("/aa" + fragment);
    });

    this.fireauth.user.subscribe(
    (originalUser: firebase.User) => {
      this.user = originalUser;
      console.log(this.user);
      }
    )
  }

  login(){
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        // Codi quan sh'a produit un login correcte
        console.log(user);
        let email = user.user.email;
        this.firestore.checkAllowedUsers(email).pipe(take(1)).subscribe(
          (originalEmail: any[]) =>{
            if(originalEmail.length == 1){
              // Correcte
              this.loginError = false;
              this.allowUserError = false;
              this.router.navigate(["home"]);
            }else {
              // Error
              this.loginError = true;
              this.allowUserError = true;
              this.fireauth.logout();
            }
          }
        );
      }
    ).catch (
      (error: any) => {
          // Codi error de login de creedencial
      }

    )
  }

}


