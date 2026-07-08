# PaySwift Setup Script
# Run this to install dependencies and start the dev server

Write-Host "=== PaySwift Setup ===" -ForegroundColor Cyan

# Check Node.js
try {
   = node --version
  Write-Host "✓ Node.js " -ForegroundColor Green
} catch {
  Write-Host "✗ Node.js not installed. Download from https://nodejs.org" -ForegroundColor Red
  exit 1
}

# Install dependencies
Write-Host "
Installing dependencies (node_modules ~300-500MB)..." -ForegroundColor Yellow
npm install

if (0 -eq 0) {
  Write-Host "✓ Dependencies installed" -ForegroundColor Green
} else {
  Write-Host "✗ Installation failed" -ForegroundColor Red
  exit 1
}

# Check .env.local
if (-not (Test-Path ".env.local")) {
  Write-Host "
Creating .env.local from .env.example..." -ForegroundColor Yellow
  Copy-Item ".env.example" ".env.local"
  Write-Host "⚠ Edit .env.local with your Supabase credentials" -ForegroundColor Yellow
}

# Start dev server
Write-Host "
Starting development server..." -ForegroundColor Green
Write-Host "Open http://localhost:3000 in your browser
" -ForegroundColor Cyan
npm run dev
