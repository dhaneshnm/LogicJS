var generate_map = function generate_map(level){
	var Map = new Array(10);
	for (var i = 0; i < Map.length; i++) {
		Map[i] = new Array(10);
		for (var j = 0; j < Map[j].length; j++) {
			Map[i][j] = 0;
		};
	};
	switch(level){
		case 1:
			break;			
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		default:
		    break;	

	};
	return Map;
}