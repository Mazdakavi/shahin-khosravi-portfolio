@echo off
cd /d "D:\Mazdak\Mazdak\site"
echo Updating remote origin...
git remote set-url origin https://github.com/Mazdakavi/shahin-khosravi-portfolio.git
echo Pushing code to GitHub...
git add .
git commit -m "Update portfolio projects"
git push -u origin main
echo.
echo Done! Check github.com/Mazdakavi/shahin-khosravi-portfolio
pause
