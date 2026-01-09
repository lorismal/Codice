@echo off
echo ==========================================
echo    Avvio Piattaforma Revenue Sharing
echo ==========================================

echo [1/3] Avvio Backend (Django)...
start "Backend Server" cmd /k "cd backend && venv\Scripts\activate && python manage.py runserver"

echo [2/3] Avvio Frontend (Next.js)...
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo [3/3] Attendo avvio server...
timeout /t 5 /nobreak >nul

echo Apertura browser...
start "" "http://localhost:3000"

echo.
echo ==========================================
echo    Piattaforma ATTIVA!
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:8000
echo ==========================================
echo.
echo Premi un tasto per chiudere questa finestra...
pause >nul
