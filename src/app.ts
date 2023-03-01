import express, { Application } from "express";
import userRouter from "./routes/user.route";
import blogRoute from "./routes/blog.route";
const app: Application = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/blogs", blogRoute);

let port: number = 3003;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
