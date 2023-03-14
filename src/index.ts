import express, { Express, Response, Request } from 'express';
import config from './config';
import { render } from './render';
import webpackMiddleware from './middleware/webpack';

const app: Express = express();

if (config.env === 'development') {
  app.use(webpackMiddleware());
} else {
  app.use(express.static('dist'));
}

app.get('*', (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
  console.log(`Environment: ${config.env}!`)
})