import * as dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

export default {
  mongoURI: `mongodb+srv://${process.env.MongoDB_UserName}:${process.env.MongoDB_Password}@cluster0.pymohdd.mongodb.net/?retryWrites=true&w=majority`,
};
