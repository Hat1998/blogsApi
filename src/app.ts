import express, { Application } from "express";
import userRouter from "./routes/user.route";
import blogRoute from "./routes/blog.route";
import cors from 'cors'
const app: Application = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/blogs", blogRoute);
app.use(cors());

let port: number = 3003;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
