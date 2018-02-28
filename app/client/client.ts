
import * as request from 'superagent';
import * as config from '../config';
import { ILoginPayload, ILoginResponse } from '../payloads';



export class Client {

    constructor() {
        //
    }

    public async login(host: string, port: number, payload: ILoginPayload, responseHandler: (err: any, res: ILoginResponse) => void) {
        this._get(host, port, config.locations.login, payload, responseHandler);
    }

    private async _get(host: string, port: number, location: string, payload: any, responseHandler: (err: any, res: any) => void): Promise<void> {
       // location = location.startsWith('/') ? location : `/${location}`;
        let url: string = `${host}:${port}${location}`;
        let message = `client._get on url ${url}`;
         request.get({url})
            .query(payload)
            .end(responseHandler);
    }


}
