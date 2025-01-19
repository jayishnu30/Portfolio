import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

// Projects route
app.get('/api/projects', (req, res) => {
  // TODO: Implement projects fetch logic
  res.json([]);
});

// Experience route
app.get('/api/experience', (req, res) => {
  // TODO: Implement experience fetch logic
  res.json([]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 