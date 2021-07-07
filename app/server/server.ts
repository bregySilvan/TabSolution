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

        //http://10.1.34.106:3000/login?name=silvan&password=bregy
        router.get('/login', (req, res, next) => {
          console.log('/login is requested');

          console.log(`name: ${req.query.name}`);
          console.log(`password: ${req.query.password}\n`);

          var success = req.query.name === 'silvan' && req.query.password === 'bregy';
          res.status(200);
          res.json({success: success});
          res.end();
          next();

        });

        this.express.use('/', router);
      }
    }
    export default new App().express;