try{
	const fs = require('fs');
	var text = fs.readFileSync(process.argv[2]);
	var lines = text.toString();
	var cnt = 0;
	for (let i = 0; lines[i]; i++)
		if (lines[i] === '\n')
			cnt++;
	console.log(cnt);
}
catch(error){
	console.log(error);
}
