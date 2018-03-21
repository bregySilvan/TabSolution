import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface IBoard {
  title: string;
  description;
  imageURL;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard
  id = "ID2";
  requestURLHost: string = 'http://localhost';
  requestURLPort: string = ':8888';
  requestURLTag: string = '/title/';
  requestURLID:string = '1';
  requestURLBoard: string = this.requestURLHost+this.requestURLPort+this.requestURLTag+this.requestURLID;
  length: string; 
  

  constructor(private http: HttpClient) { 
  this.http.get(this.requestURLBoard).subscribe((data:IBoard) => {
    this.currentBoard = data;

      }
    );
  }
  ngOnInit() {
  }

}
