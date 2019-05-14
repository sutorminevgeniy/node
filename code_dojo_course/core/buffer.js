const buffer = Buffer.from('Node.js');
// const buffer = Buffer.from('Node.js', 'utf-8');

console.log(buffer);
console.log(buffer.toString());
// <Buffer 4e 6f 64 65 2e 6a 73>
// Node.js

buffer[0] = 77;
console.log(buffer.toString());
// Mode.js

buffer.write('H');
console.log(buffer.toString());
// Hode.js

console.log(buffer.slice(0, 4).toString());
// Hode

console.log(buffer.length);
// 7

console.log(buffer.toJSON());
// { type: 'Buffer', data: [ 72, 111, 100, 101, 46, 106, 115 ] }


const bufferAlloc = Buffer.alloc(256);

console.log(bufferAlloc);
console.log(bufferAlloc.length);
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
// 256