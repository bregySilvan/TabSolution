import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IBoard } from '../../../../interfaces';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'post-logic',
  templateUrl: './post-logic.component.html',
  styleUrls: ['./post-logic.component.css']
})
export class PostLogicComponent {

  board = {
    title: 'sword master'
  };

  requestHost = 'localhost';
  requestPort = '34534';
  requestLocation = 'title';
  requestTargetId = '1';
  requestUrlBoard = `http://${this.requestHost}:${this.requestPort}/${this.requestLocation}/${this.requestTargetId}`;
  titletest = "";

  constructor(private http: HttpClient) {

  }

  myform: FormGroup;
  title: FormControl;


  onSubmit() { 
    this.postBoard();
  };

  postBoard() {
    console.log('posting');
    this.http.post(this.requestUrlBoard, this.board);
     this.titletest = this.board.title;
   }

  handleBoardPostError(err: any, sentBoard: any) {
    return Observable.create({});
  }

}
