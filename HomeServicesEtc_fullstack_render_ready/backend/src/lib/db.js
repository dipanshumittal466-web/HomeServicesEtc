const { Pool } = require('pg');

let pool;
if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
} else {
  console.warn("⚠️ No DATABASE_URL provided. DB calls will return empty results. Set DATABASE_URL to enable database.");
  // Create a no-op pool that returns empty results to prevent server crash during development
  pool = {
    query: async (text, params) => {
      console.warn("DB query attempted without DATABASE_URL:", text);
      return { rows: [], rowCount: 0 };
    }
  };
}

module.exports = { query: (text, params) => pool.query(text, params) };
