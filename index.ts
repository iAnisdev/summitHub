import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();
const PORT = process.env.PORT || 3300;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello SummitHub!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
