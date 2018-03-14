import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IBoard } from '../../../../interfaces';
import { httpPostOptions } from '../../../../config';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


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

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.postTitle();
  }

  postTitle() {
    console.log('posting');
    this.http.post(this.requestUrlBoard, this.board)
    .subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('yay')
    );
   }

  handleBoardPostError(err: any, sentBoard: any) {
    console.error(err);
    console.log(sentBoard);
    return Observable.create({});
  }

}
