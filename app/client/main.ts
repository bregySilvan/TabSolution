import { Client } from './client';
import * as config from '../config';
import { ILoginPayload, ILoginResponse } from '../payloads';



let host = '10.1.34.106';
let port = config.defaultPort;
let location = '/title';
let payload: ILoginPayload = {
    name: 'silvan',
    password: 'bregy'
};

let client: Client = new Client

client.login(host, port, payload, (err: any, res: ILoginResponse) => {
    if(err) {
        console.log(err);
        console.log('unsuspected error occured');
    } else {
        if(res.success) {
            console.log('successfully logged in');
        } else {
            console.log('login failed')
        }
    }
});


