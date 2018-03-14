import { Injectable } from '@angular/core';
import { IBoard } from '../../../../interfaces';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import * as config from '../../../../config';

@Injectable()
export class BoardService {
    
    private emitBoardChange = new Subject<IBoard>();
    private _currentBoard: Observable<IBoard> = this.emitBoardChange.asObservable();

    requestTarget: string = 'localhost';
    requestPort: number = config.defaultPort;
    requestLocation: string = '/board';

    constructor(private http: HttpClient) {
        //
    }

    getCurrentBoard(): Observable<IBoard> {
        
        return this._currentBoard;
    }

    setCurrentBoardId(id: string) {
        if(!id) {
            console.log('pls select a board to display..');
            return;
        }
        console.warn('id to select f4rom server:', id);
        let boardRequestUrl = `http://${this.requestTarget}:${this.requestPort}${this.requestLocation}/2?id=${id}`;
        console.log('boardRequestUrl: ', boardRequestUrl);
        this.http.get(boardRequestUrl).subscribe((board: IBoard) => {
            console.log('board.serviece recieved board. id:' + id, 'board: ', board);
            this.emitBoardChange.next(board);
        });
    }

}