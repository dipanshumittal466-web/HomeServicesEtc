#!/bin/bash
set -e   # अगर कोई command fail हो तो script रुक जाएगा

echo "🚀 Starting deployment..."

# 1. Install backend dependencies
echo "📦 Installing backend dependencies..."
npm install

# 2. Run database migration
echo "🗄️ Running migrations on DB: $DATABASE_URL"
psql "$DATABASE_URL" -f migrations/20250910_create_provider_documents.sql

# 3. Start backend server
echo "▶️ Starting backend server..."
node src/server.js
