const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Port configuration - inline usage
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// CORS configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*'
}));

app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE || '10mb' }));

// Database connection - inline usage
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: parseInt(process.env.DB_POOL_SIZE || '20')
});

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: NODE_ENV,
    version: process.env.APP_VERSION || '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`App URL: ${process.env.APP_URL}`);
});

module.exports = app;
