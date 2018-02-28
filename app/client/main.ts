import { Client } from './client';
import * as config from '../config';
import { ILoginPayload } from '../payloads';
import { ILoginResponse } from '../responses';

let host = '10.1.34.106';
let port = config.defaultPort;
let payload: ILoginPayload = {
    name: 'silvan',
    password: 'bregy'
};

let client: Client = new Client

client.login(host, port, payload, (err: any, res: ILoginResponse) => {
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


