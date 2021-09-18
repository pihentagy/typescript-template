import * as express from 'express';
import { greet } from 'a/a';

const app = express();

app.get('/', (request, response) => {
  response.send('' + greet);
});

console.log('starting up');
app.listen(5000);
