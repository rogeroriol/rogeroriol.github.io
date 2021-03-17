import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Homework } from 'src/app/models/homework';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import * as ClassicEditor from '../../../../ckeditor5/build/ckeditor';


@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {
  
  public id: number;

  public textEditor = ClassicEditor;
  public configEditor: any = {};

  public homework: Homework;


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
          console.log(this.id);
        }
        
        this.firedb.getDocuments().subscribe(
          (originalsHomeworks: Homework[]) => {
            this.homeworkDetail = originalsHomeworks[this.id];
            console.log(this.homeworkDetail.content);
          }
        )
      }
    );

    this.configEditor = {
      toolbar: {
          items: [
            'heading', 'horizontalLine', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', 'link', 'bulletedList', 'numberedList', 'todoList', '|',
            'fontBackgroundColor', 'fontColor', 'fontsize', 'fontfamily', 'highlight', '|',
            'alignment', 'indent', 'outdent', '|',
            'code', 'codeBlock', 'htmlEmbed', '|',
            //'-', // break point
            'ckfinder', 'imageUpload', 'imageInsert', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|',
            'MathType', 'ChemType', 'specialCharacters'       
          ],
          shouldNotGroupWhenFull: true
        },
      image: {
        toolbar: [
          'imageStyle:full', 'imageStyle:side', '|',
          'imageTextAlternative'
        ],
        styles: ['full', 'side']
      },
      removePlugins: ['MathType']
    }


  }

  ngOnInit(): void {
  }

  transformContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.homeworkDetail.content);
  }

  updateHomework(id: string){
    this.firedb.updateHomework(id, this.homeworkDetail);
    this.router.navigate(["homeworks"]);


  }

  returnHomework(){
    this.router.navigate(["homeworks"]);
  }

}
