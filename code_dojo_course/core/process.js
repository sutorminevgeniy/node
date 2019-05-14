// console.log(process);

console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
//> C:\Program Files\nodejs\node.exe
//> v10.15.3
//> win32


console.log(process.argv);
//> [ 'C:\\Program Files\\nodejs\\node.exe',
//>   'C:\\OpenServer\\domains\\node\\code_dojo_course\\process' ]

//  Если запустить  node process Hello world
//> [ 'C:\\Program Files\\nodejs\\node.exe',
//>   'C:\\OpenServer\\domains\\node\\code_dojo_course\\process',
//>   'Hello',
//>   'world' ]

//  Если запустить  node process "Hello world"
//> [ 'C:\\Program Files\\nodejs\\node.exe',
//>   'C:\\OpenServer\\domains\\node\\code_dojo_course\\process',
//>   'Hello world' ]

const index = process.argv.indexOf('-m');

if (index > -1) {
  const mesage = process.argv[index + 1];

  console.log(mesage);
}
// Если запустить  node process -m "Hello world"
//> Hello world

function getValue(flag) {
  const index = process.argv.indexOf(flag);

  return (index > -1) ? process.argv[index + 1] : null;
}

const message = getValue('-m') || 'Hello';
const name = getValue('-n') || 'friend';

console.log(`${message}, ${name}`);
// Если запустить  node process -m Hello -n Oleg
//> Hello, Oleg
