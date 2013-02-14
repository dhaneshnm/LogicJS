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
	var findNextNode = function findNextNode(openlist){
		return openlist[0];//wrong logic,but will change it soon
	}
	var openlist = [];
	var closedlist =[];
	var start_node = new node(0,0);
	start_node.row_number = startandend.start/10;
	start_node.column_number = startandend.start%10;
	openlist.push(start_node);
	while(openlist.length >0){
		if(map[start_node.row_number][start_node.column_number+1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
			
		}
		if(map[start_node.row_number][start_node.column_number-1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number+1][start_node.column_number+1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number+1][start_node.column_number] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number+1][start_node.column_number-1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number-1][start_node.column_number+1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number-1][start_node.column_number] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		if(map[start_node.row_number-1][start_node.column_number-1] === 0){
			var temp_node = new node(start_node.row_number,start_node.column_number+1);
			temp_node.G = start_node.G + 10;
			temp_node.H = get_H(map,temp_node);
			temp_node.parent = start_node;
			var existance = checkifexist(temp_node,openlist);
			if(existance < 0){
				openlist.push(temp_node);	
			}
			else{
				if(openlist[existance].G > start_node.G+10){
					openlist[existance].parent = start_node;
					openlist[existance].G = start_node.G+10
				}
			}
		}
		openlist.remove(start_node);
		closedlist.push(start_node);
		start_node = findNextNode(openlist);
	}

}