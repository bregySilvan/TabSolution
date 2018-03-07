import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface ServerResponse {
  title: string;
  anzahlFolgen;
  rating;
  
  ID1; 
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';

  constructor(private http: HttpClient){

  }


  ngOnInit(): void {
 
    this.http.get<ServerResponse>('http://localhost:8888/board/1').subscribe(data => {
    console.log("Filmtitle: "+ data.title);
    console.log("Number of series: "+ data.anzahlFolgen);
    console.log("rating: "+ data.rating);
      }
    );
   //Code for getRequest on /data
    this.http.get<ServerResponse>('http://localhost:8888/data').subscribe(data => {
      console.log("Filmtitle: "+ data.ID1.title);
      console.log("Number of series: "+ data.ID1.anzahlFolgen);
      console.log("rating: "+ data.ID1.rating);
    }
  );

   //Code for getRequest on /title/id
    this.http.get<ServerResponse>('http://localhost:8888/title/3').subscribe(data => {
      
      console.log("Filmtitle: "+ data.title);

      }
    );
  }

}

