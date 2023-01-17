const http = require('http');
const url = require('url');

const PORT = process.argv[2];
var server = http.createServer();
server.on('request', (req, res) => {
	var query = url.parse(req.url, true).query;
	let time = new Date(query.iso);
	switch (url.parse(req.url).pathname) {
		case '/api/parsetime':
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify(
			{
				'hour': time.getUTCHours(),
				'minute': time.getUTCMinutes(),
				'second': time.getUTCSeconds() 
			}
			));
			res.end('\n');
			break;
		case '/api/unixtime':
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify(
			{'unixtime': time.getTime()}
			));
			res.end('\n');
			break;
		default:
			res.end('\n');
	};
});
server.listen(PORT);

