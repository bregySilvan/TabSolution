import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IBoard } from '../../../../interfaces';
import { httpPostOptions } from '../../../../config';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  board: IBoard = {
    title: 'sword master',
    description: 'my first description',
    imageURL: 'https://www.w3schools.com/w3css/img_lights.jpg'
  };

  requestHost = 'localhost';
  requestPort = '8888';
  requestLocation = '/boards/id';
  requestTargetId = '1';
  requestUrlBoard = `http://${this.requestHost}:${this.requestPort}${this.requestLocation}?id=${this.requestTargetId}`;

  constructor(private http: HttpClient) {

    this.http.post(this.requestUrlBoard, this.board, httpPostOptions)
      .pipe(catchError(this.handleBoardPostError('error on requesting board', this.board)));
  }

  ngOnInit() {

  }

  handleBoardPostError(err: any, sentBoard: any) {
    console.log(err);
    console.log(sentBoard);
    return Observable.create({});
  }

}
