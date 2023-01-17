const http = require('http');
const bl = require('bl');

try {
	req = http.get(process.argv[2], (res) => {
			res.pipe(bl((err, data) => {
				if (err)
					return console.log(err);
				data = data.toString();
				console.log(data.length);
				console.log(data);
			}));
	});
	req.on('error', (err) => {
		console.log(err);
	});
}catch(err){
	console.log(err);
}
