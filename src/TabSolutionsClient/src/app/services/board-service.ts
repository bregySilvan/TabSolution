import { Injectable } from '@angular/core';
import { IBoard } from '../../../../interfaces';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as config from '../../../../config';

@Injectable()
export class BoardService {

    private _currentBoard: Observable<IBoard> = Observable.create(null);

    requestTarget: string = 'localhost';
    boardPort: number = config.defaultPort;
    boardLocation: string = '/board';

    constructor(private http: HttpClient) {
        //
    }

    getCurrentBoard(): Observable<IBoard> {
        return this._currentBoard;
    }

    setCurrentBoardId(id: string) {
        if (!id) {
            console.log('pls select a board to display..');
            return;
        }
        let boardRequestUrl = `http://${this.requestTarget}:${this.boardPort}${this.boardLocation}/2?id=${id}`;
        this._currentBoard = this.http.get<IBoard>(boardRequestUrl);
    }
}