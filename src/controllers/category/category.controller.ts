import { Request, Response, Router } from 'express';
import { CategoryModel } from '../../models/category';
import pool from '../../utils/database';
import Controller from './controller.interface';

export class CategoryController implements Controller {
  public path = '/categories';
  public router = Router();
  private model: CategoryModel;

  constructor() {
    this.model = new CategoryModel(pool);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAll.bind(this));
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const categories = await this.model.getAll();
    res.json(categories);
  }
}