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
  
  requestTarget: string = 'localhost';
  requestPort: number = config.defaultPort;
  requestLocation: string = '/boardlist';
  requestPayload = '2';
  requestURLBoard: string = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}`
  boardInfos: IBoardInfo[] = [];
  hansueli:string = ""; 
  selectedBoards:string[] = [];
  index: number;

  
  addSelectedToArray(id:string):void
  {
    this.hansueli = ""; 
    if(!this.selectedBoards.includes(id))
    {
      this.selectedBoards.push(id);
      for (let i of this.selectedBoards) {
        //console.log(i); // "4", "5", "6"
     }
    }
    else
    {
      this.index = this.selectedBoards.indexOf(id);
      this.selectedBoards.splice(this.index);
      for (let i of this.selectedBoards) {
        //console.log(i); // "4", "5", "6"
     }
    }
      
  }   
  giveItOut():void
    { 
      for (let i of this.selectedBoards) {  
        this.hansueli += i+", "; 
     }
    }


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

