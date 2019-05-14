const fs = require('fs');

//  Разбор командной строки
const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

//  Распределение команд
switch (command) {
  case 'list':
    list();
    break;

  case 'view':
    view();
    break;

  case 'create':
    create();
    breake;

  case 'remove':
    remove();
    breake;

  default:
   console.log('Неизвестная команла');
}