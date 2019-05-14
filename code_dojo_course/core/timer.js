const waitTimeout = 3000;
const waitInterval = 100;
let currentTime = 0;
let percent = 0;

function print(percent) {
  process.stdout.clearLine(); // очистка строки
  process.stdout.cursorTo(0); // преревод курсора в начало
  process.stdout.write(`Загрузка..${percent}%`); // Вывод
}

setInterval(() => {
  // Подсчет времени и  процентов
  currentTime += waitInterval;
  percent = Math.floor(currentTime / waitTimeout * 100);

  print(percent);
}, waitInterval);

setTimeout(() => {
  print(100);

  process.stdout.write('\nГотово!');
  process.exit();
}, waitTimeout);