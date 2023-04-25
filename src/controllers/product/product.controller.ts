import { Router, Request, Response } from 'express';
import Controller from 'interfaces/controller.interface';
import Database from 'utils/database';

class ProductController implements Controller {
  public path = '/products';
  private database = new Database();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getProductsByCategory);
  }

  private getProductsByCategory = async (req: Request, res:Response) => {
    const {id} = req.params
    const products = await this.database.pool.query(`SELECT * from products where products.category = ${id}`)
    res.send(JSON.stringify({data: products.rows}))
  }
}

export default ProductController;
