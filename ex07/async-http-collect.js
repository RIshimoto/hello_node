const http = require('http');
const bl = require('bl');

function http_get(url){
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			res.pipe(bl((err, data) => {
				if (err)
					return console.error(err);
				console.log(data.toString());
				resolve();
			}));
		});
	});
}

let promise = Promise.resolve();
for (var i = 2; i < process.argv.length; i++){
	let url = process.argv[i];
	promise = promise.then(() => http_get(url))
					.catch((error)=>{console.error(error)});
}
