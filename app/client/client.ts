
import * as request from 'superagent';
import * as config from '../config';
import { ILoginPayload } from '../payloads';
import { ILoginResponse } from '../responses';

export class Client {

    constructor() {
        //
    }

    public async login(host: string, port: number, payload: ILoginPayload, responseHandler: (error: any, response: ILoginResponse) => void) {
        this._get(host, port, config.locations.login, payload, (err: any, res: any) => {
            if(err) {
                responseHandler(err, { success: false });
            } else {
                responseHandler(err, res.body);
            }
        });
    }

    private async _get(host: string, port: number, location: string, payload: any, responseHandler: (err: any, res: any) => void): Promise<void> {
        location = location.startsWith('/') ? location : `/${location}`;
        let url: string = `http://${host}:${port}${location}`;
        let message = `client._get on url ${url}`;
        console.log(message);
         request.get(url)
            .query(payload)
            .end(responseHandler);
    }

}
