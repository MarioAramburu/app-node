import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Express + Node + Typescript",
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
