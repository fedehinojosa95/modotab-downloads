@echo off
title Modo.Tab POS - Reiniciar configuracion
echo.
echo ========================================
echo   Reiniciando configuracion Modo.Tab POS
echo ========================================
echo.
echo Cerrando el POS si esta abierto...
taskkill /F /IM "Modo.Tab POS.exe" 2>nul
taskkill /F /IM "pos-app.exe" 2>nul
timeout /t 2 /nobreak >nul

echo Borrando configuracion local...
rmdir /s /q "%APPDATA%\Modo.Tab POS" 2>nul
rmdir /s /q "%APPDATA%\pos-app" 2>nul

echo.
echo ========================================
echo   Listo. Abre el POS desde el escritorio.
echo   Te va a pedir un codigo MTAB nuevo.
echo ========================================
echo.
pause
