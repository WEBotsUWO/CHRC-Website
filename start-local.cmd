@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed.
  echo Install Node.js 22.13 or newer, then run this file again.
  echo https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo.
  echo Preparing the CHRC website for its first local run...
  call npm install
  if errorlevel 1 (
    echo.
    echo The setup did not finish successfully.
    pause
    exit /b 1
  )
)

echo.
echo CHRC will be available at:
echo http://localhost:3000
echo.
echo Keep this window open. Press Ctrl+C to stop the local site.
echo.

call npm run local
