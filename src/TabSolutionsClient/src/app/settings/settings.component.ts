import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as config from '../../../../config';
import { IBoard } from '../../../../interfaces';
import { IBoardInfo } from '../../../../interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  setShit():void{
    this.hansueli = "fack da shit"; 
    console.log("hans");

    }
  requestTarget: string = 'localhost';
  requestPort: number = config.defaultPort;
  requestLocation: string = '/boardlist';
  requestPayload = '2';
  requestURLBoard: string = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}`
  boardInfos: IBoardInfo[] = [];
  hansueli:string = "nothing"; 

  

  constructor(private http: HttpClient) { 

    
    this.http.get(this.requestURLBoard).subscribe((data: IBoardInfo[]) => {
      this.boardInfos = data;
      //this.setShit();
      }
    );
  }
  ngOnInit() {
  }  


}

