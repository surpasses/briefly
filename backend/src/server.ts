import dotenv from "dotenv";
import pool from './db/pool';
import router from './routes/healthRoutes';

dotenv.config();

import app from "./app";

const port = Number(process.env.PORT || 4000);
const server = app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));

async function shutdown(signal: string) {
  console.log(`Received ${signal}. Closing server...`);

  server.close(async () => {
    console.log('server closed');

    try {
      await pool.end();
      console.log('DB pool closed');
      process.exit(0);
    } catch (err) {
      console.error('Error closing DB pool', err);
      process.exit(1);
    }
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);