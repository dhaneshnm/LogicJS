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
		var end_row = startandend.end/10;
		var end_column = startandend.end%10;
		return ((end_column -temp_node.column_number)+(end.node -temp_node.row_number));
	}
	var findNextNode = function findNextNode(openlist){
		return openlist[0];//wrong logic,but will change it soon
	}
	var openlist = [];
	var closedlist =[];
	var start_node = new node(0,0);
	start_node.row_number = startandend.start/10;
	start_node.column_number = startandend.start%10;
	var ProcessNode = function ProcessNode(current_node,next_row,next_column){
		if(map[next_row][next_column] === 0){
			var temp_node = new node(cnext_row,next_column);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = current_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > current_node.G+10){
					openlist[existance].parent = current_node;
					openlist[existance].G = current_node.G+10
				}
			}
			
		}

	}
	openlist.push(start_node);
	while(openlist.length >0){
		ProcessNode(start_node,start_node.row_number,start_node.column_number+1);		
		ProcessNode(start_node,start_node.row_number,start_node.column_number-1);
		ProcessNode(start_node,start_node.row_number+1,start_node.column_number);
		ProcessNode(start_node,start_node.row_number-1,start_node.column_number);
		openlist.remove(start_node);
		closedlist.push(start_node);
		start_node = findNextNode(openlist);
	}

}