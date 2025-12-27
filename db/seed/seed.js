require("dotenv").config({ path: ".env" });

const { Client } = require("pg");

function mustEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function seed() {
  const client = new Client({ connectionString: mustEnv("DATABASE_URL") });
  await client.connect();

  try {
    await client.query("BEGIN");

    // Order matters (FK)
    await client.query(`
      TRUNCATE users, news_sources
      RESTART IDENTITY
      CASCADE;
    `);

    // Insert news sources
    await client.query(
      `
      INSERT INTO news_sources (id, name, source)
      VALUES
        (1, 'news.com.au', 'news.com.au'),
        (2, 'abc', 'abc.net.au'),
        (3, 'smh', 'smh.com.au');
      `
    );

    // Insert users
    await client.query(
      `
      INSERT INTO users (
        channel,
        destination,
        is_active,
        is_verified,
        news_source_id
      )
      VALUES
        ('email', 'cindy@example.com', true, true, 1),
        ('sms', '+61210000001', true, false, 2),
        ('email', 'kevin@example.com', true, false, 3);
      `
    );

    await client.query("COMMIT");
    console.log("Seed complete");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seed();
