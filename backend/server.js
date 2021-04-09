const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const connect_str = process.env.DATABASE;
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
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
