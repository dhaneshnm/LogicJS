var node = function node(row_number,column_number){
		this.parent = null;
		this.row_number = row_number;
		this.column_number = column_number;
		this.G = 0;
		this.H = 0;
	}
var get_H = function get_H(map,temp_node,startandend){
		console.log(startandend);
		var end_row = startandend.end/map_size;
		var end_column = startandend.end%map_size;
		return ((end_column -temp_node.column_number)+(end_row -temp_node.row_number));
	}
var findNextNode = function findNextNode(openlist){
		var lowest = 0;
		for(var index = 1;index < openlist.length; index++){
			if(openlist[index].H < lowest.H){
				lowest = index;
			}
		}
		return lowest;//wrong logic,but will change it soon
	}
var openlist = [];
var closedlist =[];
var processedlist = [];
var map_size = 9;
var ProcessNode = function (map,current_node,next_row,next_column,startandend){	
	console.log("May be I bored her.I will improve.I will be an awesome charmer soon!");	
	console.log("the open list ");
	console.log(openlist);	
	console.log("the code list ");
	console.log(closedlist);		
	if(map[next_row][next_column] === 0){			
			var temp_node = new node(next_row,next_column);
			temp_node.G = current_node.G + map_size;
			temp_node.H = get_H(map,temp_node,startandend);
			temp_node.parent = current_node;
			var existance = check_for_node(openlist,temp_node);
			var isProcessed = check_for_node(processedlist,temp_node);
			if(existance < 0 && isProcessed < 0){ //not processed,not in open lisr
				openlist.push(temp_node);				
				console.log(temp_node);
				//console.log("May be I bored her.But I am too lazy to find out!");
			}
			else if((isProcessed < 0) && (existance >0)) { //not processed but present in open list
				if(openlist[existance].G > current_node.G+map_size){
					openlist[existance].parent = current_node;
					openlist[existance].G = current_node.G+map_size;
				}
			}
			else if(isProcessed > 0 && existance < 0){//processed node
				//ignore
				console.log("node ignored")
			}	
			else if((isProcessed > 0) && (existance > 0)){
				console.log("This shouldnot have happened");
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
		new_node.row_number = 0;Math.floor(startandend.start/map_size);
		new_node.column_number = 0; Math.floor(startandend.start%map_size);	
		openlist.push(new_node);
		var count = 0;		
		while(openlist.length > 0){
			count = count+1;
			var lowest = findNextNode(openlist);
			new_node = openlist[lowest];
			openlist.splice(lowest);
			console.log("lowest is "+lowest);
			if(new_node.column_number < 8){
				ProcessNode(map,new_node,new_node.row_number,new_node.column_number+1,startandend);	
			}
			if(new_node.column_number > 0){
				ProcessNode(map,new_node,new_node.row_number,new_node.column_number-1,startandend);
			}			
			if(new_node.row_number < 8){
				ProcessNode(map,new_node,new_node.row_number+1,new_node.column_number,startandend);
			}
			if(new_node.row_number > 0){
				ProcessNode(map,new_node,new_node.row_number-1,new_node.column_number,startandend);
			}
			if(check_for_node(closedlist,new_node) < 0){
				closedlist.push(new_node);				
				if((new_node.row_number === 5) &&(new_node.column_number === 5)){
					break;
				}				
			}
			else{
				processedlist.push(new_node);
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