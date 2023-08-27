import express, { Application, Request, Response } from 'express';
import cors from "cors"

const app: Application = express();
app.use(cors());
app.use(express.json())
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
