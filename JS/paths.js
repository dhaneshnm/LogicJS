var node = function node(row_number,column_number){
 "use strict";		
 this.row_number = row_number;
 this.column_number = column_number;
 this.G = 200;
 this.H = 0;
 this.parent = null;
};
var get_H = function get_H(temp_node,startandend){		
 "use strict";
 var end_row,end_column,H_value;
 end_row = Math.floor(startandend.end/map_size);
 end_column = Math.floor(startandend.end%map_size);
 H_value = Math.abs(end_column -temp_node.column_number)+Math.abs(end_row -temp_node.row_number);		
 return H_value;
};
var findNextNode = function findNextNode(openlist){
 "use strict";
 var lowest,index;
 lowest = 0;
 for(index = 1;index < openlist.length; index = index+1){
  if((openlist[index].G+openlist[index].H)  < (openlist[lowest].G+openlist[lowest].H)){
   lowest = index;
  }
 }
 return lowest;
};
function ProcessNode(map,current_node,next_row,next_column,startandend){
  "use strict";
  var temp_node,existance,isProcessed,nodeProcessed;
  nodeProcessed = false;	
  if(map[next_row][next_column] === 0 ||map[next_row][next_column] === 2){			
   temp_node = new node(next_row,next_column);
   temp_node.G = temp_node.G+current_node.H-(temp_node.G+1);
   temp_node.H = get_H(temp_node,startandend);
   temp_node.parent = current_node;
   existance = check_for_node(openlist,temp_node);
   isProcessed = check_for_node(processedlist,temp_node);
   if(existance < 0 && isProcessed < 0){ //not processed,not in open list
    openlist.push(temp_node);				
    nodeProcessed = true;
  }
  else if((isProcessed < 0) && (existance >0)) { //not processed but present in open list
   if(openlist[existance].G > current_node.G+map_size){
    openlist[existance].parent = current_node;
    openlist[existance].G = current_node.G+map_size;
   }
   nodeProcessed = true;
  }
  else if(isProcessed > 0 && existance < 0){//processed node
   //ignore
   console.log("node ignored");
   nodeProcessed = false;
  }	
  else if((isProcessed > 0) && (existance > 0)){
   console.log("This should not have happened");
   nodeProcessed = false;
  }		
 }
 else{
  console.log("Non navigable block");				
 }
 return nodeProcessed;
}
function paths(map,startandend){
 "use strict";
 var map_size,new_node,lowest,isProcessSucess1,isProcessSucess2,isProcessSucess3,isProcessSucess4,thePath;		
 map_size = 9;
 new_node = new node(0,0);
 new_node.row_number = Math.floor(startandend.start/map_size);
 new_node.column_number =  Math.floor(startandend.start%map_size);			
 new_node.H = 0;
 new_node.G = new_node.G-1;
 openlist.push(new_node);		
 var count = 0;		
 while(count < 20){			
  count = count+1;			
  lowest = findNextNode(openlist);
  new_node = openlist[lowest];
  openlist.splice(lowest,1);			
  isProcessSucess1 = false;
  isProcessSucess2 = false;
  isProcessSucess3 = false;
  isProcessSucess4 = false;
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
 thePath = findpath(closedlist);
 closedlist = [];//I use global variables,my bad :(
 openlist = [];
 processedlist =[];
 return thePath; 	
}
function check_for_node(list,node){
 "use strict";
 var i,position;
 position = -1;
 for (i = list.length - 1; i >= 0; i=i-1) {
  if((list[i].column_number === node.column_number) && (list[i].row_number === node.row_number)){
   position = i;
   break;
  }
 }
 return position;
}
function findpath(closedlist){	
 "use strict";
 var pathlist,current_node;
 pathlist = [];
 current_node = closedlist.pop();
 while(current_node !== null){
  pathlist.push(current_node);
  current_node = current_node.parent;
 }
 return pathlist;
}

