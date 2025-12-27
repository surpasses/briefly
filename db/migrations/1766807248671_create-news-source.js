exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
        CREATE TABLE news_sources (
        id BIGINT PRIMARY KEY,
        name VARCHAR NOT NULL,
        source VARCHAR NOT NULL
        );
        `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS news_sources;
  `);
};


