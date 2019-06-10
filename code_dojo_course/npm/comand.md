<!-- версия npm -->
npm -v

<!-- Создания файла package.json -->
npm init
<!-- Создания файла package.json по умолчанию (без ответов на вопросы) -->
npm init -y


<!-- Список установленных локально пакетов (без вложенных) -->
npm list --depth=0
npm ls --depth=0
<!-- Список установленных глобально пакетов (без вложенных) -->
npm list -g --depth=0
npm ls -g --depth=0


<!-- Справка по установке пакетов npm -->
npm install -h

<!-- Установка пакета npm глобально -->
npm install -g http-server
<!-- Запуск пакета http-server -->
http-server

<!-- Установка пакетов сохраненных в package.json -->
npm install

<!-- Установка пакета npm локально -->
npm install bcryptjs
npm i bcryptjs
<!-- с сохранением данных в "dependencies" -->
npm install --save bcryptjs
<!-- с сохранением данных в "devDependencies" -->
npm install --save-dev mocha
<!-- указанной версии -->
npm install colors@1.0.0


<!-- удаление пакета -->
npm uninstall colors
<!-- с удалением данных из "dependencies" -->
npm uninstall --save bcryptjs
<!-- с удалением данных из "devDependencies" -->
npm uninstall --save-dev mocha
<!-- удаление глобального пакета -->
npm uninstall -g http-server


<!-- Показывает не обнавлённые пакеты -->
npm outdated


<!-- обнавляет все необнавлённые пакеты -->
npm update
<!-- обнавляет указанные пакеты -->
npm update colors
<!-- обнавляет указанные пакеты глобально -->
npm update -g http-server