import * as http from 'http';
import App from './server';
import * as config  from '../config';

    const port =  config.defaultPort;
    App.set('port', port);
    //create a server and pass our Express app to it.
    const server = http.createServer(App);
    server.listen(port);
    server.on('listening', onListening);

    //function to note that Express is listening
    function onListening(): void {
      console.log(`Listening on port ${port}`);
    }