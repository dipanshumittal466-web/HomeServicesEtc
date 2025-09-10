#!/bin/bash
set -e   # अगर कोई command fail हो तो script रुक जाए

echo "🚀 Starting deployment..."

# 1. Backend dependencies install करो
echo "📦 Installing backend dependencies..."
npm install --prefix backend

# 2. Database migration run करो
echo "🗄️ Running migrations..."
psql $DATABASE_URL -f backend/migrations/20250910_create_provider_documents.sql

# 3. Backend server start करो
echo "▶️ Starting backend server..."
npm start --prefix backend
