import cors from "cors";
import express, { Request, Response } from "express";
import "reflect-metadata";
import { AppDataSource } from "./db/connection";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Express + Node + Typescript",
  });
});

async function main() {
  try {
    app.listen(3000, () => {
      console.log("App running on port 3000");
    });
    const connection = AppDataSource.initialize();
    console.log("Connection is succesfull");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

main();
