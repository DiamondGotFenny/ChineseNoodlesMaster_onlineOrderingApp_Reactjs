const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message, err);
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

  process.exit(1);
});
const app = require('./app');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const connect_str = process.env.DATABASE_LOCAL;
mongoose
  .connect(connect_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('connection is succuessful');
  })
  .catch((err) => console.log(err));

const port = process.env.port || 3005;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    //finished all requests before stop the server
    process.exit(1);
  });
});
