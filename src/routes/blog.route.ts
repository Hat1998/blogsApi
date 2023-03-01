import express from "express";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "../controllers/blog.controller";

const router = express.Router()

router.get('/', getBlogs)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)




export default router