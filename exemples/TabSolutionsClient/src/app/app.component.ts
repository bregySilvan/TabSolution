import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('https://localhost:8888/title/2').subscribe(data => {
      console.log(data);
    });
  }

}