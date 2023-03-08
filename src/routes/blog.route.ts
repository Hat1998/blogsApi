import express from "express";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "../controllers/blog.controller";
import auth from "../middleware/auth";

const router = express.Router()

router.get('/',auth, getBlogs)
router.post('/',auth, createBlog)
router.put('/:id',auth, updateBlog)
router.delete('/:id',auth, deleteBlog)




export default router