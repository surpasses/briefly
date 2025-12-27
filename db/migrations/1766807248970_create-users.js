exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
        CREATE TABLE users (
        id BIGSERIAL PRIMARY KEY,
        channel TEXT NOT NULL CHECK (channel IN ('email','sms')),
        destination TEXT NOT NULL,
        is_active BOOLEAN DEFAULT true,
        is_verified BOOLEAN DEFAULT false,
        news_source_id BIGINT NOT NULL REFERENCES news_sources(id),
        created_at TIMESTAMPTZ DEFAULT now()
        );
        `
    );
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS users;
  `);
};

