import {prisma} from '../config/db'
import { Request, Response } from "express";

 
export const getBlogs = async (req: Request, res: Response) => {
  try {
    let blogs = await prisma.blog.findMany({
      where: {
        userId:res.locals.user.id
      }
    });

    res.send(blogs);
  } catch (err) {
    console.log(err);
  }
};

export const createBlog = async (req: Request, res: Response) => {
   try {
    let blogs = await prisma.blog.create({
       data:{
        text:req.body.text,
        userId: res.locals.user.id
      }
    });

    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    let update = await prisma.blog.updateMany({
      where: {
        id: req.params.id,
        userId: res.locals.user.id
      },
      data: {
        text,
      },
    });
    res.json(update);
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    let del = await prisma.blog.deleteMany({
      where: {
        id: id,
        userId: res.locals.user.id
      },
    });
    res.json(del);
  } catch (err) {
    console.log(err);
  }
};
