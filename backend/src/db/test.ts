import pool from './pool';

async function test() {
  const res = await pool.query('SELECT NOW()');
  console.log(res.rows[0]);
  process.exit(0);
}

test().catch(console.error);
