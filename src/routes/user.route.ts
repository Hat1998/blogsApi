
import  express from "express";
import { login, register } from "../controllers/user.controller";

const router = express.Router();

router.post('/', register)
router.get('/', login)



export default router;