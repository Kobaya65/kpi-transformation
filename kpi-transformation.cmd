REM démarrage des exécutables nécessaires à l'appli

REM Mongo Shell
start mongo

REM Compass
"C:\Users\Administrateur\AppData\Local\MongoDBCompass\MongoDBCompass.exe" "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

REM serveur back d'abord
C:
CD \Users\Administrateur\Documents\mern-todo-app\backend
nodemon server
pause

REM puis serveur front
CD \Users\Administrateur\Documents\mern-todo-app
pause
npm start
pause
