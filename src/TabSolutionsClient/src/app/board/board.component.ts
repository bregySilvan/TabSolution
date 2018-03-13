import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as config from '../../../../config';
import { IBoard } from '../../../../interfaces';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard
  
  requestTarget: string = 'localhost';
  requestPort: number = config.defaultPort;
  requestLocation: string = '/board/id';
  requestPayload = '2';
  requestURLBoard: string = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}?id=${this.requestPayload}`

  constructor(private http: HttpClient) {
    this.http.get(this.requestURLBoard).subscribe((data: IBoard) => {
    this.currentBoard = data;
      }
    );
  }

  ngOnInit() {
  }

}
