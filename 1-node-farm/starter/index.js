const fs = require('fs');
const http = require('http');
const url = require('url');

//SERVER
const server = http.createServer((req, res) => {
	res.end('Hello from the server');
});
server.listen(8000, () => {
	console.log('listening on port 8000');
});

/////////////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);
// const textOut = `This is what we know about the avacado ${textIn} \n\n \t-Today is ${new Date().toLocaleDateString()}`;
// fs.writeFileSync('./txt/ouput.txt', textOut);
// console.log('File written!');

//Non blocking asyncronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// 	!err
// 		? fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// 				console.log(!err ? data2 : err);
// 				fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// 					!err
// 						? fs.writeFile(
// 								'./txt/final.txt',
// 								`${data2}\n${data3}`,
// 								'utf-8',
// 								(err) => {
// 									console.log(!err ? 'Your file has been written' : err);
// 								}
// 						  )
// 						: console.log(err);
// 				});
// 		  })
// 		: console.log(err);
// });
// console.log('Will read file');
