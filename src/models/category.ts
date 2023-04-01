import { PoolClient } from 'pg';

export interface Category {
  id: number;
  name: string;
}

export class CategoryModel {
  constructor(private client: PoolClient) {}

  async getAll(): Promise<Category[]> {
    const query = 'SELECT * FROM categories';
    const result = await this.client.query(query);
    return result.rows;
  }
}
