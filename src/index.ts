import express, { Express, Response, Request } from 'express';
import config from './config';
import { render } from './render';


const app: Express = express();

app.use(express.json());

app.get('*', (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
})