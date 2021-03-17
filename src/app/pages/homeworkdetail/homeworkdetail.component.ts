import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { Homework } from 'src/app/models/homework';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homeworkdetail',
  templateUrl: './homeworkdetail.component.html',
  styleUrls: ['./homeworkdetail.component.css']

})
export class HomeworkdetailComponent implements OnInit {

  
  public id: number;

  public homeworksList: Homework[];
  public homeworkDetail: Homework;


  constructor(private actRoute: ActivatedRoute, private router: Router, private firedb: FirebasedbService, private sanitizer: DomSanitizer) {

    this.actRoute.params.subscribe(
      (params: Params) => {

        // Comprobar si existe el id

        if(params["id"] == null){
          this.router.navigate(["homeworks"]);
        } else {
          this.id = params["id"];
        }
        
        this.firedb.getDocuments().subscribe(
          (originalsHomeworks: Homework[]) => {
            this.homeworkDetail = originalsHomeworks[this.id];
            console.log(this.homeworkDetail.content);
          }
        )
      }
    );


  }

  transformContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.homeworkDetail.content);
  }

  returnHomework(){
    this.router.navigate(["homeworks"]);
  }

  ngOnInit(): void {

  }


}
