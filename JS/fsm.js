function PlayerMove(playerObject){
 "use strict";
 var new_position;			
 switch(playerObject.state.get_movement()){
  case "forward"://move  forward 
   new_position = 	playerObject.Position+states;	
   updatemotion(playerObject,new_position);	
   break;
  case "back"://move  forward
   new_position = playerObject.Position-states; 		 		 				 			
   updatemotion(playerObject,new_position);	
   break;
  case "left"://turn left 	 					
   if((playerObject.Position%states) === 8){
    console.log("invalid move");
   }
   else{
    new_position = 	 playerObject.Position+1; 			 				 			
    updatemotion(playerObject,new_position);	
   }
   break;
  case "right"://turn right
   if((playerObject.Position%states) === 0){
    console.log("invalid move");    
   }
  else{
   new_position = 	 playerObject.Position-1; 			 				 			
   updatemotion(playerObject,new_position);	
  } 		
  break;
  default:
   console.log("invalid input for PlayerMove by "+playerObject.state.get_movement());
 }
}		
	function PlayerPickup(playerObject){
		switch(playerObject.state.get_movement()){
	 		case "forward"://Pick up from front
	 			if(CheckforCollectable(playerObject.Position+states)){
	 				updatepickup(playerObject,playerObject.Position+states);
	 			}
	 			else{
	 				console.log("Nothing to puck up there");
	 			}
	 			break;
	 		case "back"://Pick up from back
	 			if(CheckforCollectable(playerObject.Position-states)){
	 				updatepickup(playerObject,playerObject.Position-states);
	 			}
	 			else{
	 				console.log("Nothing to puck up there");
	 			}
	 			break;
	 		case "left"://Pick up from left
	 			if(CheckforCollectable(playerObject.Position+1)){
	 				updatepickup(playerObject,playerObject.Position+1);
	 			}
	 			else{
	 				console.log("Nothing to puck up there");
	 			}
	 			break;
	 		case "right"://Pick up from right
		 		if(CheckforCollectable(playerObject.Position-1)){
		 			updatepickup(playerObject,playerObject.Position-1);
	 			}
	 			else{
	 				console.log("Nothing to puck up there");
	 			}
		 		break;
		 	default:
		 		console.log("invalid input for PlayerMove by "+playerObject.state.get_movement());
	 	};
	}
	function PlayerDrop(playerObject){
		switch(playerObject.state.get_movement()){
 		case "forward"://move  forward 
 			var new_position = 	playerObject.Position+states;	
 			updatedrop(playerObject,new_position);	
 			break;
 		case "back"://move  forward
 			var new_position = 	playerObject.Position-states; 		 		 				 			
 			updatemotion(playerObject,new_position);	
 			break;
 		case "left"://turn left 	 					
 			if((playerObject.Position%states) == 8){
 				console.log("invalid move");
 				return;
 			}
 			else{
 				var new_position = 	 playerObject.Position+1; 			 				 			
 				updatedrop(playerObject,new_position);	
 			}
 			break;
 		case "right"://turn right
	 		if((playerObject.Position%states) == 0){
 				console.log("invalid move");
 				return;
 			}
 			else{
 				var new_position = 	 playerObject.Position-1; 			 				 			
 				updatedrop(playerObject,new_position);		
 			} 		
	 		break;
	 	default:
	 		console.log("invalid input for PlayerMove by "+playerObject.state.get_movement());
 		};
	}
	function StateChange(newstate,playerObject){
		switch(playerObject.state.get_movement()){			
			case "forward":
		 		if(newstate === "move") {
		 			playerObject.state = new State("forward");
		 			PlayerMove(playerObject);
		 		}
		 		else if(newstate === "left"){
		 			playerObject.state = new State("left");
		 		}
		 		else if(newstate === "right"){
		 			playerObject.state = new State("right");
		 		}
		 		else if(newstate == "pickup"){			 			
			 			PlayerPickup(playerObject);
			 		}	
			 	else if(newstate == "drop"){			 			
			 			PlayerDrop(playerObject);
			 		} 
	 			break;	 		
	 		case "left":
		 		if(newstate === "move") {
		 			playerObject.state = new State("left");
		 			PlayerMove(playerObject);		 					 			
		 		}
		 		else if(newstate === "left"){
		 			playerObject.state = new State("back");
		 		}
		 		else if(newstate == "right"){
		 			playerObject.state = new State("forward");
		 		}
		 		else if(newstate == "pickup"){			 			
			 			PlayerPickup(playerObject);
			 		}	
			 	else if(newstate == "drop"){			 			
			 			PlayerDrop(playerObject);
			 		} 
		 		break;
	 		case "right":
		 		if(newstate === "move") {
			 			playerObject.state = new State("right");
			 			PlayerMove(playerObject);
			 		}
			 		else if(newstate == "pickup"){			 			
			 			PlayerPickup(playerObject);
			 		}	
			 		else if(newstate == "drop"){			 			
			 			PlayerDrop(playerObject);
			 		} 
			 		else if(newstate === "left"){
			 			playerObject.state = new State("forward");
			 		}
			 		else if(newstate == "right"){
			 			playerObject.state = new State("back");
			 		}
		 		break;
	 		case "back"://turn right
		 		if(newstate === "move") {
			 			playerObject.state = new State("back");
			 			PlayerMove(playerObject);
			 		}
			 		else if(newstate == "pickup"){			 			
			 			PlayerPickup(playerObject);
			 		}	
			 		else if(newstate == "drop"){			 			
			 			PlayerDrop(playerObject);
			 		} 
			 		else if(newstate === "left"){
			 			playerObject.state = new State("right");
			 		}
			 		else if(newstate == "right"){
			 			playerObject.state = new State("left");
			 		}			 		
			 	
		 		break;
	 		default:	 		
	 		console.log("invalid input for StateChange by "+playerObject.state.get_movement());	
		}
		UpdateAvatar(playerObject);				
	}		

function interpret_move(command,playerObject){
	//code for "repeat instruction"
	if(command.indexOf("repeat")>-1){
		var ins = command.split("(");
		var params = ins[1].split(",");
		var repeat_times = parseInt(params[1]);
		var move = params[0];
		for (var i = 0; i < repeat_times; i++) {
			StateChange(move,playerObject);	
		};		
	}
	else if(command === "f1"){
		executeCode("#f1");
		}
	else if(command == "f2"){
		executeCode("#f2");
	}
	else{
		StateChange(command,playerObject);
	}
}	
function updatemotion(playerObject, new_position) {
    "use strict";
    if(isValidMove(new_position)){
     var x ,y = Math.floor(playerObject.Position/states);
     y = Math.floor(playerObject.Position%states);	
     playerObject.spriteObj.position(y*5,x*5); 		 		
     playerObject.spriteObj.update();
     playerObject.spriteObj.position(y*5*2,x*5*2); 		 		
     playerObject.spriteObj.update();
     playerObject.spriteObj.position(y*5*5*2,x*5*5*2); 		 		
     playerObject.spriteObj.update();	
    }
   else{
    console.log("invalid move");
   }
   if(new_position === winning_position){
    if(level === 4){
     console.log("You have arrived ..");
     alert("you have cleared all levels.you are a Logic Ninja!!!");
     window.location.reload();
    }
    else{
     console.log("You have arrived ..");
     alert("you have cleared level "+level);
     level = level+1;
     gameloop(level);
    }
  }	
}
function isValidMove(position) 	{
 "use strict";
 var x,y, valid;
 x = Math.floor(position/states);
 y = Math.floor(position%states); 	
 if((map[x][y ] === 0 )||(map[x][y ] === 2)){
  valid = true;
 }
 else{
  valid = false;
 }
 return valid;
}
function UpdateAvatar(playerObject){
 "use strict";	
 var newstate = playerObject.state.get_movement();
 playerObject.spriteObj.loadImg(state_image_map[newstate]);	
 playerObject.spriteObj.update();
}
function CheckforCollectable(position){
 "use strict";
 var i;
 for(i=0;i<global_collectables.length;i=i+1){		
  if(global_collectables[i].X === Math.floor(position%states) && global_collectables[i].Y === Math.floor(position/states)){
   return true;
   }
  }
  return false;	
}
function updatepickup(playerObject,position){
 "use strict";
 var i,gem;
 for(i=0;i<global_collectables.length;i=i+1){
  if(global_collectables[i].X === Math.floor(position%states) && global_collectables[i].Y === Math.floor(position/states)){
   gem = global_collectables[i];
   console.log("trying to pickup "+ gem);
   playerObject.collectables.push(gem);
   gem.spriteObj.position(500,playerObject.collectables.length*50);
   gem.spriteObj.update();
   global_collectables.splice (i, i);
  }
 }
}
function updatedrop(playerObject,position){
 "use strict";
 var gem = playerObject.collectables.pop();
 gem.X = Math.floor(position%states);
 gem.Y = Math.floor(position/states);
 gem.spriteObj.position(gem.X*50,gem.Y*50);
 gem.spriteObj.update();
 global_collectables.push(gem);
}

