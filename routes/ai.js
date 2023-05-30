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

  const pythonProcess = spawn('python', ['python_file.py']);

  pythonProcess.stdout.on('data', (data) => {
    // Process the output from Python if needed
    console.log(`Received data from Python: ${data}`);
    res.send(data.toString()); // Send the processed data back as the response
  });

  pythonProcess.on('error', (error) => {
    console.error(`Python process error: ${error.message}`);
    res.status(500).send('Internal server error');
  });

  pythonProcess.on('exit', (code) => {
    console.log(`Python process exited with code ${code}`);
  });

  res.send('Received your POST request!');
});

export default router;