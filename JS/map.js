var generate_map = function generate_map(level){
	var Map = new Array(9);
	for (var i = 0; i < Map.length; i++) {
		Map[i] = new Array(9);
		for (var j = 0; j < Map[i].length; j++) {
			Map[i][j] = 0;
		};
	};
	switch(level){
		case 1:
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[0][5] = 1;
			Map[1][8] = 1;
			Map[0][0] = 2;//start
			Map[8][8] = 2;//end
			break;			
		case 2:
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[0][5] = 1;
			Map[1][8] = 1;
			break;
		case 3:
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[0][5] = 1;
			Map[1][8] = 1;
			break;
		case 4:
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[0][5] = 1;
			Map[1][8] = 1;
			break;
		default:
		    break;	

	};
	return Map;
}