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
    this.http.get<ServerResponse>('http://localhost:8888/board').subscribe(data => {
      console.log("Filmtitle: "+ data.title.toString());
      console.log("Number of series: "+ data.anzahlFolgen.toString());
      console.log("rating: "+ data.ID1.toString());
      //console.log(data);
      
      //console.log(data.ID1); 
  }
  );
  }

}

