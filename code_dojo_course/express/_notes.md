<!-- Установка пакета для генерации пакета npm глобально -->
npm install express-generator -g
<!-- с сохранением данных в "dependencies" -->
npm install --save express

<!-- Помощь -->
express --help
express -h

<!-- Генерация пакета -->
express [options] [dir]
express --view=pug myapp
cd myapp
npm install
set DEBUG=myapp:* & npm start