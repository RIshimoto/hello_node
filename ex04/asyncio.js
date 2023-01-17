try{
	const fs = require('fs');
	fs.readFile(process.argv[2], 'utf-8', function(err, data){
		if (err) throw err;
		var lines = data.toString().split('\n');
		var cnt = 0;
		for (var line of lines)
			cnt++;
		--cnt;
		console.log(cnt);
	});
}catch(error){
	console.log(error);
}
