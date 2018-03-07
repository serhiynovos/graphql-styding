import * as express from 'express';
import { Express } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import * as fs from 'fs';
import { connect, connection } from 'mongoose';

connect(`mongodb://localhost:27017/graph-qls`);

connection.on('connected', () => console.log('Connected to db'));

const schema = buildSchema(fs.readFileSync('./src/types/user.graphql').toString())

const app: Express = express();

app.use('/graph-ql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: {
    hello: () => 4
  }
}))

app.listen(3000, () => {
  console.log('Server is ready for using');
});