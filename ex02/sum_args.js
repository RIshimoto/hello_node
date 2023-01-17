try{
	var res = 0;
	for (var i = 2; i < process.argv.length; i++)
		res += parseInt(process.argv[i]);
	console.log(res);
}catch(error){
	console.log(error);
}
