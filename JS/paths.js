var node = function node(row_number,column_number){		
		this.row_number = row_number;
		this.column_number = column_number;
		this.G = 200;
		this.H = 0;
		this.parent = null;
	}
var get_H = function get_H(temp_node,startandend){		
		var end_row = Math.floor(startandend.end/map_size);
		var end_column = Math.floor(startandend.end%map_size);
		var H_value = Math.abs(end_column -temp_node.column_number)+Math.abs(end_row -temp_node.row_number);
		if((temp_node.row_number === 3) && (temp_node.column_number === 6)){			
			console.log(end_row);
			console.log(temp_node.row_number);
			console.log(end_column);
			console.log(temp_node.column_number);
			console.log(H_value);
		}
		if((temp_node.row_number === 4) && (temp_node.column_number === 5)){			
			console.log(end_row);
			console.log(temp_node.row_number);
			console.log(end_column);
			console.log(temp_node.column_number);
			console.log(H_value);
		}
		return H_value;
	}
var findNextNode = function findNextNode(openlist){
		var lowest = 0;
		for(var index = 1;index < openlist.length; index++){
			if((openlist[index].G+openlist[index].H)  < (openlist[lowest].G+openlist[lowest].H)){
				lowest = index;
			}
		}
		return lowest;//wrong logic,but will change it soon
	}
var openlist = [];
var closedlist =[];
var processedlist = [];
var map_size = 9;
function ProcessNode(map,current_node,next_row,next_column,startandend){
	//console.log("******ProcessNode*******");
	//console.log(current_node);		
	if(map[next_row][next_column] === 0 ||map[next_row][next_column] === 2){			
			var temp_node = new node(next_row,next_column);
			temp_node.G = temp_node.G+current_node.H-(temp_node.G+1);
			temp_node.H = get_H(temp_node,startandend);
			temp_node.parent = current_node;
			var existance = check_for_node(openlist,temp_node);
			var isProcessed = check_for_node(processedlist,temp_node);
			if(existance < 0 && isProcessed < 0){ //not processed,not in open lisr
				openlist.push(temp_node);
				//console.log("***insert***");				
				//console.log(temp_node);				
				return true;
			}
			else if((isProcessed < 0) && (existance >0)) { //not processed but present in open list
				if(openlist[existance].G > current_node.G+map_size){
					openlist[existance].parent = current_node;
					openlist[existance].G = current_node.G+map_size;
				}
				return true;
			}
			else if(isProcessed > 0 && existance < 0){//processed node
				//ignore
				console.log("node ignored");
				return false;
			}	
			else if((isProcessed > 0) && (existance > 0)){
				console.log("This shouldnot have happened");
				return false;
			}		
	}
	else{
		console.log("Non navigable block");
		console.log(map[next_row][next_column]);
		console.log(next_row+"booya"+next_column);
	}
	}
function paths(map,startandend,program,result) {
		var numberofinstructions = program.length;
		var map_size = 9;
		var new_node = new node(0,0);
		new_node.row_number = 0;//Math.floor(startandend.start/map_size);
		new_node.column_number = 0;// Math.floor(startandend.start%map_size);			
		new_node.H = 0;
		new_node.G = new_node.G-1;
		openlist.push(new_node);		
		var count = 0;		
		while(count < 20){			
			count = count+1;
			console.log(openlist.length);
			var lowest = findNextNode(openlist);
			var new_node = openlist[lowest];
			openlist.splice(lowest,1);
			console.log("lowest is "+lowest);
			console.log(openlist.length);
			var isProcessSucess1 = false;
			var isProcessSucess2 = false;
			var isProcessSucess3 = false;
			var isProcessSucess4 = false;
			if(new_node.column_number < 8){
				isProcessSucess1=ProcessNode(map,new_node,new_node.row_number,new_node.column_number+1,startandend);	
			}
			if(new_node.column_number > 0){
				isProcessSucess2=ProcessNode(map,new_node,new_node.row_number,new_node.column_number-1,startandend);
			}			
			if(new_node.row_number < 8){
				isProcessSucess3=ProcessNode(map,new_node,new_node.row_number+1,new_node.column_number,startandend);
			}
			if(new_node.row_number > 0){
				isProcessSucess4=ProcessNode(map,new_node,new_node.row_number-1,new_node.column_number,startandend);
			}
			if(isProcessSucess1||isProcessSucess2||isProcessSucess3||isProcessSucess4){
				if(check_for_node(closedlist,new_node) < 0){
					closedlist.push(new_node);				
					if((new_node.row_number === 5) &&(new_node.column_number === 5)){
						break;
					}				
				}
			}
			else{
				processedlist.push(new_node);//a dead end.Never take that route ever again.
			}			
		}	
	console.log(closedlist);
 	console.log(openlist);
}
function check_for_node(list,node){
	for (var i = list.length - 1; i >= 0; i--) {
		if((list[i].column_number === node.column_number) && (list[i].row_number === node.row_number)){
			return i;
		}
	};
	return -1;
}