import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as config from '../../../../config';
import { IBoard } from '../../../../interfaces';
import { BoardService } from '../services/board-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  currentBoard: IBoard = null;

  constructor(private http: HttpClient,
    private boardService: BoardService) {

    this.boardService.getCurrentBoard().subscribe((board: IBoard) => {
      this.currentBoard = board;
    });

  }


}
