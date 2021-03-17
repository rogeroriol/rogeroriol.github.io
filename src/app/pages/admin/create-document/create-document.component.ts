import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Homework } from 'src/app/models/homework';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

import * as ClassicEditor from '../../../../ckeditor5/build/ckeditor';


@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {

  public textEditor = ClassicEditor;
  public configEditor: any = {};

  public homework: Homework;

  constructor(private firedb: FirebasedbService, private router: Router) { 

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

    this.homework = new Homework();
  }


  createHomework(){
    this.firedb.createHomework(this.homework);
    this.router.navigate(["homeworks"]);
  }
  
  ngOnInit(): void {
  }

}
