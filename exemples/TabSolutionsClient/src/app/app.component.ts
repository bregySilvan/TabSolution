import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface IBoard {
  title: string;
  description;
  imageURL;
  ID2; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 

   
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  

  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard
  requestURLBoard: string = 'http://localhost:8888/board/2';
  /*requestURLData: string = 'http://localhost:8888/data';
  requestURLTitle: string = 'http://localhost:8888/title/1';*/


  constructor(private http: HttpClient){
    this.http.get(this.requestURLBoard).subscribe((data:IBoard) => {
    this.currentBoard = data;
      }
    );
  }


  ngOnInit(): void {
 
    
    /*
   //Code for getRequest on /data
    this.http.get<IBoard>('http://localhost:8888/data').subscribe(data => {
      console.log("Filmtitle: "+ data.ID2.title);
      console.log("Number of series: "+ data.ID2.anzahlFolgen);
      console.log("rating: "+ data.ID2.rating);
    }
  );

   //Code for getRequest on /title/id
    this.http.get<IBoard>('http://localhost:8888/title/3').subscribe(data => {
      
      console.log("Filmtitle: "+ data.title);

      }
    );
  }
*/
  }
}

