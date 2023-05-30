// Import packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import ai from "./routes/ai.js";

// Middlewares
const app = express();
app.use(express.json());

app.use(cors({
	origin: '*'
  }));
  
app.use(bodyParser.json());

// Routes
app.use("/ai", ai);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
