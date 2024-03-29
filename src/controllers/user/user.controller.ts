import { Router, Request, Response } from 'express';
import Controller from 'interfaces/controller.interface';
import Database from 'utils/database';

class UserController implements Controller {
  public path = '/user';
  public router = Router();
  private database = new Database()

  public constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post(`${this.path}/register`, this.createUser);
    this.router.get(`${this.path}/:username/:password`, this.getUser);
  };

  private createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password)
    try{
      const result = await this.database.pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]
      );
      return res.status(201).json({message: 'User created successfully.', user: result.rows[0]});
    } catch (error){
      console.error(error);
      return res.status(500).json({ message: 'Cannot create user',});
    }
  };

  private getUser = async (req: Request, res: Response) => {
    console.log(req.body)
    const {username, password} = req.params 
    console.log(username, password)
    const result = await this.database.pool.query(`SELECT * FROM users where users.username = '${username}'`)
    if (result.rows[0]["password"] == password){
      res.send(JSON.stringify({data: result.rows[0]}))
    }else{
      res.send("Failed")
    }
  };
}

export default UserController;
