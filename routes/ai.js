import express from 'express';
import { spawn } from 'child_process';

const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.post("/", async (req, res, next) => {
  console.log('Received a POST request!');
  console.log(req.body);

  const { id } = req.body; // Assuming you are using a middleware to parse the request body

  // Spawn a Python process and pass the ID as an argument
  const pythonProcess = spawn('python', ['python_file.py', id]);

  // Collect the output from the Python process
  pythonProcess.stdout.on('data', (data) => {
    const processedData = data.toString(); // Assuming the Python script outputs processed data
    // console.log("Processed data from Python: " + processedData);
    res.send(processedData);
  });

  // Handle any error that might occur during the Python process execution
  pythonProcess.stderr.on('data', (err) => {
    console.error(err.toString());
    res.status(500).send('An error occurred during processing.');
  });

  // res.send('Received your POST request!');
});

export default router;