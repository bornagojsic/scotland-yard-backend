// Import packages
import express from 'express';
import home from "./routes/home.js";

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
