import {prisma} from '../config/db'
import { Request, Response } from "express";

 
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  let user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  res.send(user);
};


export const login = async (req: Request, res: Response) => {
    const { username, password} = req.body ;
    let user = await prisma.user.findMany({
      where: {
        username,
        password,
      },
    });
    res.json({"message": `welcome ${username}`});
  };
  
