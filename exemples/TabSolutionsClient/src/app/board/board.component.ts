import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface IBoard {
  title: string;
  description;
  imageURL;
  ID2; 
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard
  requestURLBoard: string = 'http://localhost:8888/board/2';
  /*requestURLData: string = 'http://localhost:8888/data';
  requestURLTitle: string = 'http://localhost:8888/title/1';*/


  constructor(private http: HttpClient){
    this.http.get(this.requestURLBoard).subscribe((data:IBoard) => {
    this.currentBoard = data;
    console.log(data.title);
      }
    );
  }

  ngOnInit() {
  }

}
