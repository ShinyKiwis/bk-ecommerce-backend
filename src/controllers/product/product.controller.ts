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
    this.router.get(`${this.path}/info/:id`, this.getProductById);
    this.router.get(`${this.path}/search/:query`, this.getProductByName)
  }

  private getProductsByCategory = async (req: Request, res:Response) => {
    const {id} = req.params
    const products = await this.database.pool.query(`SELECT * from products where products.category = ${id}`)
    res.send(JSON.stringify({data: products.rows}))
  }

  private getProductById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const products = await this.database.pool.query(`SELECT * from products where products.id = ${id}`)
    res.send(JSON.stringify({data: products.rows}))
  }

  private getProductByName = async (req: Request, res: Response) => {
    const {query} = req.params;
    const products = await this.database.pool.query(`SELECT * from products where LOWER(products.name) LIKE '%${query.toLowerCase()}%'`)
    res.send(JSON.stringify({data: products.rows}))
  }
}

export default ProductController;
