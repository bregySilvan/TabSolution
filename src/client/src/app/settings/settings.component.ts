import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../../../config';
import { IBoardInfo, IBoard } from '../../../../interfaces';
import { BoardService } from '../services/board-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  requestTarget: string = 'localhost';
  requestPort: number = config.defaultPort;
  requestLocation: string = '/boardlist';
  requestURLBoard: string = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}`
  boardInfos: IBoardInfo[] = [];
  selectedBoards: string[] = [];
  lastSelectedBoardId: string = '';
  boardLocation: string = 'board';
  addSelectedToArray(id: string): void {
    if (!this.selectedBoards.includes(id)) {
      this.selectedBoards.push(id);
      this.lastSelectedBoardId = id;
    } else {
      let index = this.selectedBoards.indexOf(id);
      this.selectedBoards.splice(index);
    }
  }

  constructor(private http: HttpClient,
    private router: Router,
    private boardService: BoardService) {

    this.http.get(this.requestURLBoard).subscribe((boardInfos: IBoardInfo[]) => {
      this.boardInfos = boardInfos;
    });
  }

  public onBoardSelected() {
    this.boardService.setCurrentBoardId(this.lastSelectedBoardId);
    if(this.lastSelectedBoardId) {
      this.router.navigateByUrl(this.boardLocation);
    }
  }




}

