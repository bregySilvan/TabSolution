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

  board: IBoard = {
    title: 'sword master',
    description: 'my first description',
    imageURL: 'https://www.w3schools.com/w3css/img_lights.jpg'
  };

  requestHost = 'localhost';
  requestPort = '34534';
  requestLocation = 'boards';
  requestTargetId = '1';
  requestUrlBoard = `http://${this.requestHost}:${this.requestPort}/${this.requestLocation}/${this.requestTargetId}`;

  constructor(private http: HttpClient) {
    //this.http.post(this.requestUrlBoard, this.board, httpPostOptions)
      //.catch((error:any) => Observable.throw(error.json().error))
    //.pipe(catchError(this.handleBoardPostError('error: 'this.error , this.board)));

    this.create(this.board);
  }

  create(board: IBoard): Observable<any> {
    return this.http
      .post(this.requestUrlBoard, this.board, httpPostOptions)
      .map(response => {
        if (response.status === 200) console.log("status 200 OK");
        return response;
      })
      .catch((error: any) => console.log(error));
  }

  ngOnInit() {

  }

  handleBoardPostError(err: any, sentBoard: any) {
    console.log(err);
    console.log(sentBoard);
    return Observable.create({});
  }

}
