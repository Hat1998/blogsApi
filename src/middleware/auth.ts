import { Request, Response, Application, NextFunction } from "express";
import * as jwt from "jsonwebtoken";


interface User{
    id: string;
    username: string;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
          return   res.status(403).json({
            msg: "you are not authorized",
          });
        
        }
        const user = jwt.verify(token, process.env.SECRET as string) as User;
        console.log(user);
        
        res.locals.user = user;
        next();
    } catch (error) {
        console.log(error);
        
    }
 
};

export default auth;