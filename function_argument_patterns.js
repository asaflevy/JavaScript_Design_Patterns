function myFunction(){
	var x = 0;
	for (var i=0;i<arguments.length;i++){
		x+= arguments[i];
	}
	return x;
}