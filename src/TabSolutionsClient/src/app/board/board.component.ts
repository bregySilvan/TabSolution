import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
<<<<<<< HEAD

interface IBoard {
  title: string;
  description;
  imageURL;
}

=======
import * as config from '../../../../config';
import { IBoard } from '../../../../interfaces';
>>>>>>> master
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard
  
<<<<<<< HEAD
  requestURLHost: string = 'http://localhost';
  requestURLPort: string = ':8888';
  requestURLTag: string = '/board/';
  requestURLID:string = '2';
  requestURLBoard: string = this.requestURLHost+this.requestURLPort+this.requestURLTag+this.requestURLID;
  /*requestURLData: string = 'http://localhost:8888/data';
  requestURLTitle: string = 'http://localhost:8888/title/1';*/


  constructor(private http: HttpClient){
    this.http.get(this.requestURLBoard).subscribe((data:IBoard) => {
    this.currentBoard = data;
    console.log(data.title);
=======
  requestTarget: string = 'localhost';
  requestPort: number = config.defaultPort;
  requestLocation: string = '/board/id';
  requestPayload = '2';
  requestURLBoard: string = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}?id=${this.requestPayload}`

  constructor(private http: HttpClient) {
    this.http.get(this.requestURLBoard).subscribe((data: IBoard) => {
    this.currentBoard = data;
>>>>>>> master
      }
    );
  }

  ngOnInit() {
  }

}
