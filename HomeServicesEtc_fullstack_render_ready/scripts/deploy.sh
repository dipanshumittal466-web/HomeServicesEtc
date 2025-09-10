#!/bin/bash
set -e   # अगर कोई command fail हो तो script रुक जाएगा

echo "🚀 Starting deployment..."

# 1. Backend dependencies install
echo "📦 Installing backend dependencies..."
npm install --prefix backend

# 2. Run database migration
echo "🗄️ Running migrations..."
psql $DATABASE_URL -f backend/migrations/20250910_create_provider_documents.sql

# 3. Start backend server
echo "▶️ Starting backend server..."
node backend/src/server.js
