import * as express from 'express';
import * as bodyParser from 'body-parser';
import Controller from 'interfaces/controller.interface';

class App {
  private app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server listening on port: ${process.env.PORT}`);
    });
  }
}

export default App;
