import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IBoard } from '../../../../interfaces';
import { httpPostOptions } from '../../../../config';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

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


  ngOnInit() {

  }

  onSubmit() { 
    this.postBoard();
  };

  postBoard() {
    console.log('posting');
    this.http.post(this.requestUrlBoard, this.board)
    .subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('yay')
    );
     this.titletest = this.board.title;
   }

  handleBoardPostError(err: any, sentBoard: any) {
    console.error(err);
    console.log(sentBoard);
    return Observable.create({});
  }

}
