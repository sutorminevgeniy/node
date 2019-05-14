const stdin = process.stdin;
const stdout = process.stdout;

// Метод write принимает только строку или буфер !!!
stdout.write('Node.js\n');
stdout.write('Node.js\n');
//> Node.js
//> Node.js

stdout.write('Приве! Как тебя зовут? ');
stdin.on('data', input => {
  const name = input.toString().trim();
  // Переводит из Buffeer в строку и удаляет пробелы

  console.log(name);

  const reversedName = name.split('').reverse().join('');
  stdout.write(`\n${name}, твое имя наоборот: ${reversedName}`);

  process.exit();
  // Завершение процесса
});
//  Выводит то что ввели

process.on('exit', () => stdout.write('\n\nУдачи в изучение Node.js'));
// Обработчик завершения процесса