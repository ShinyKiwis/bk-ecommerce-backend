import { Router, Request, Response } from 'express';
import Controller from 'interfaces/controller.interface';
import Database from 'utils/database';

class CategoryController implements Controller {
  public path = '/categories';
  private database = new Database();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.getCategories);
  }

  private getCategories = async (req: Request, res:Response) => {
    const categories = await this.database.pool.query("SELECT * FROM categories;")
    res.send(JSON.stringify({data: categories.rows}))
  }


}

export default CategoryController;
