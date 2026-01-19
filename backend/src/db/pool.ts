import { Pool } from 'pg';
import 'dotenv/config';

function mustEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

const pool = new Pool({
  user: mustEnv('DB_USER'),
  password: mustEnv('DB_PASSWORD'),
  host: mustEnv('DB_HOST'),
  port: Number(mustEnv('DB_PORT')),
  database: mustEnv('DB_NAME'),
  max: 10,
});

export default pool;
