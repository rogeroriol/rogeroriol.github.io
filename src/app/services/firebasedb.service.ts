import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Homework } from '../models/homework';


@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  getDocuments(): Observable<Homework[]>{
    return this.firestore.collection<Homework>("documents").valueChanges({idField: 'id'});
  }

  deleteHomework(id: string){
    this.firestore.collection<Homework>("documents").doc(id).delete();

  }

  updateHomework(id: string, homework: Homework){
    this.firestore.collection<Homework>("documents").doc(id).update(homework);

  }

  createHomework(homework: Homework) {
    console.log(Homework);
    this.firestore.collection("documents").add ({
      title: homework.title,
      content: homework.content,
      tag: homework.tag,
    });
  }

  checkAllowedUsers(email: string): Observable<any[]>{
    return this.firestore.collection("allowedUsers", ref => this.queryByEmail(email, ref)).valueChanges();
  }
  // et fa el where al select
  private queryByEmail(email: string, ref: any){
    return ref.where("email", "==", email);
  }
}
