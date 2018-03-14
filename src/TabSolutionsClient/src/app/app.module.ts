import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule,MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SettingsComponent
    
  ],
  bootstrap:    [ 
    AppComponent 
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
          path:'board', 
          component: BoardComponent 
      }, 
      {
        path:'settings', 
        component: SettingsComponent
    },
    {
        path:'login', 
        component: SettingsComponent 
    }
  ])
  ]
  
})
export class AppModule { }