function paths(map,startandend,program,result) {
	var numberofinstructions = program.length;
	var node = function node(row_number,column_number){
		var parent = null;
		var row_number = 0;
		var column_number = 0;
		var G = 0;
		var H = 0;
	}
	var get_H = function get_H(map,temp_node){
		return 0;
	}
	var openlist = [];
	var closedlist =[];
	var start_node = new node(0,0);
	start_node.row_number = startandend.start/10;
	start_node.column_number = startandend.start%10;
	openlist.push(start_node);
	if(map[start_node.row_number][start_node.column_number+1] === 0){
		var temp_node = new node(start_node.row_number,start_node.column_number+1);
		temp_node.G = start_node.G + 10;
		temp_node.H = get_H(map,temp_node);
		openlist.push(temp_node);
	}
	if(map[start_node.row_number][start_node.column_number-1] === 0){
		
	}
	if(map[start_node.row_number+1][start_node.column_number+1] === 0){
		
	}
	if(map[start_node.row_number+1][start_node.column_number] === 0){
		
	}
	if(map[start_node.row_number+1][start_node.column_number-1] === 0){
		
	}
	if(map[start_node.row_number-1][start_node.column_number+1] === 0){
		
	}
	if(map[start_node.row_number-1][start_node.column_number] === 0){
		
	}
	if(map[start_node.row_number-1][start_node.column_number-1] === 0){
		
	}

}