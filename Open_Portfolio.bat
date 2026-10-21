@echo off
chcp 65001 > nul
echo =====================================================
echo    Launching Mohamed Ragab Portfolio Website...
echo =====================================================
echo Opening browser at http://localhost:5173/ ...

:: Open the browser immediately
start http://localhost:5173/

:: Ensure node/npm are in path and run dev server if not already running
set "PATH=%PATH%;C:\Program Files\nodejs;%LOCALAPPDATA%\Programs\nodejs"
npm run dev -- --host 127.0.0.1 --port 5173
pause
