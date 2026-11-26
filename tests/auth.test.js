import request from 'supertest';
import express from 'express';

// Simple app banao sirf test ke liye
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server Healthy' });
});

// Test 1 — health check
test('Health routes should work', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.success).toBe(true);
});