import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as config from '../../../../config';
import { IBoard } from '../../../../interfaces';
import { BoardService } from '../services/board-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{

  currentBoard: IBoard = null; //new board with the attributes from the interface IBoard

  constructor(private http: HttpClient,
              private boardService: BoardService) {
    
    this.boardService.getCurrentBoard().subscribe((board: IBoard) => {
      console.log('recieved current board in board.component: ', board);
        this.currentBoard = board;
    });

  }

}
