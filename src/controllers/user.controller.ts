import {prisma} from '../config/db'
import { Request, Response } from "express";
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export const register = async (req: Request, res: Response) => {
  let hash = await argon2.hash(req.body.password)
  const { username, email } = req.body;
  let user = await prisma.user.create({
    data: {
      username,
      email,
      password:hash,
    },
  });
  res.send(user);
};


export const login = async (req: Request, res: Response) => {
  try{
    let user = await prisma.user.findFirst({
        where:{
             email:req.body.email,
        }
       })
       if(!user){
           return res.status(400).json({Error: "Wrong email "})
        }else if(!await argon2.verify( user!.password, req.body.password)){
           res.status(400).json({Error: "Wrong password"})
        }

        let token = jwt.sign({
           id:user.id,
           name:user.username,
        },process.env.SECRET as string,{expiresIn:'3h'})
        return res.status(400).json({
           message: `Hello ${user.username}`,
           token
       })

       
   }catch(error){
    console.log('error')
   }
  };
  
