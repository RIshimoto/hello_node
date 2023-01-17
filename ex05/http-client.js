const http = require('http');

var req = http.get(process.argv[2], (res) => {
	res.setEncoding('utf8');
	res.on('data', (str) => {
		console.log(str);
	});
});

req.on('error', (err) => {
	console.log("Error: " + err.message);
});
