import express from 'express';

const app = express();

app.use(express.json());

app.route('/api/');

app.route('/api/api');
// app.use(errorHandler)

export default app;