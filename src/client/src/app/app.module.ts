import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule,MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SettingsComponent } from './settings/settings.component';
import { BoardService } from './services';
import { PostLogicComponent } from './post-logic/post-logic.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SettingsComponent,
    PostLogicComponent
  ],
  providers: [BoardService],
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