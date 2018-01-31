import * as express from 'express';
    // Creates and configures an ExpressJS web server.
    class App {
      // ref to Express instance
      public express: express.Application;
      //Run configuration methods on the Express instance.
      constructor() {
        this.express = express();
        this.middleware();
        this.routes();
      }
      // Configure Express middleware.
      private middleware(): void {
      }

      // Configure API endpoints.
      private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.send(
                `<html>
                  <head>
                    <title>Tutorial: HelloWorld!!</title>
                  </head>
                  <body>
                    <h1>HelloWorld Tutorial!!</h1>
            
                <p>
                  The current data and time is: 
                  <strong>`+new Date()+`</strong>
                </p>    
            
                  </body>
                </html>`
                )
        });
        this.express.use('/', router);
      }
    }
    export default new App().express;