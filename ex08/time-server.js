const net = require('net');
require('date-utils');

const port = process.argv[2];
const server = net.createServer((socket) => {
	socket.setEncoding("utf8"); 
	socket.on('data', (data) => {
		let now = new Date(); 
		socket.write(now.toFormat('YYYY-MM-DD HH24:MI') + '\n');
		socket.end();
	});
});
server.on("error", err => { throw err; });

server.listen(port);
