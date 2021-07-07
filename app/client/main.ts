import { Client } from './client';
import * as config from '../config';
import { ILoginPayload } from '../payloads';
import { ILoginResponse, IResponseError } from '../responses';
import * as localAddress from 'ip';

let host: string = localAddress.address();
let port: number = config.defaultPort;
let payload: ILoginPayload = {
    name: 'silvan',
    password: 'bregy'
};

let client: Client = new Client();

client.login(host, port, payload, (err: IResponseError, res: ILoginResponse) => {
    if(err) {
        console.log(err);
    } else {
        if(res.success) {
            console.log('successfully logged in');
        } else {
            console.log('login failed')
        }
    }
});


