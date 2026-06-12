@echo off
cd /d "D:\Mazdak\Mazdak\site"
git config user.email "mazdakavi@gmail.com"
git config user.name "Mazdakavi"
git add -A
git commit -m "Add Dr Sajadi Villa and Dubai Marina Apartment projects"
git push origin main
echo.
echo Done!
pause
