var generate_map = function generate_map(level){
	var Map = new Array(10);
	for (var i = 0; i < Map.length; i++) {
		Map[i] = new Array(10);
		for (var j = 0; j < Map[j].length; j++) {
			Map[i][j] = 0;
		};
	};
	return Map;
}