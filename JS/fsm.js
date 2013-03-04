 var states = 9;
	function PlayerMove(playerObject){			
 		switch(playerObject.state.get_movement()){
 		case "forward"://move  forward 
 			var new_position = 	playerObject.Position+states;	
 			updatemotion(playerObject,new_position);	
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
 				updatemotion(playerObject,new_position);	
 			}
 			break;
 		case "right"://turn right
	 		if((playerObject.Position%states) == 0){
 				console.log("invalid move");
 				return;
 			}
 			else{
 				var new_position = 	 playerObject.Position-1; 			 				 			
 				updatemotion(playerObject,new_position);	
 			} 		
	 		break;
	 	default:
	 		console.log("invalid input for PlayerMove by "+playerObject.state.get_movement());
 		};
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
	else{
		StateChange(command,playerObject);
	}
}	
function updatemotion(playerObject,new_position){	
	if(isValidMove(new_position)){
 		playerObject.Position = new_position;
 		var x = Math.floor(playerObject.Position/states);
	 	var y = Math.floor(playerObject.Position%states);
	 	console.log(x+"booyaa"+y); 	
	 	playerObject.spriteObj.position(y*5,x*5); 		 		
	 	playerObject.spriteObj.update();
	 	playerObject.spriteObj.position(y*5*2,x*5*2); 		 		
	 	playerObject.spriteObj.update();
	 	playerObject.spriteObj.position(y*5*5*2,x*5*5*2); 		 		
	 	playerObject.spriteObj.update();
	 }
 	else{
 		console.log("invalid move")
 	}
 	if(new_position == winning_position){
		console.log("You have arrived ..");
		alert("you won.you are awesome!!!");
		window.location.reload();
	}	
 }

function isValidMove(position) 	{
	var x = Math.floor(position/states);
 	var y = Math.floor(position%states); 	
 	if((map[x][y ] === 0 )||(map[x][y ] === 2)){
 		return true;
 		}
 	else{
 		return false;
 		}
}

function UpdateAvatar(playerObject){	
	var newstate = playerObject.state.get_movement();
	playerObject.spriteObj.loadImg(state_image_map[newstate]);	
	playerObject.spriteObj.update();
}
function CheckforCollectable(position){
	for(var i=0;i<global_collectables.length;i++){
		console.log(global_collectables[i].X);
		console.log(global_collectables[i].Y);
		console.log(Math.floor(position/states));
		console.log(Math.floor(position%states));
		if(global_collectables[i].X === Math.floor(position%states) && global_collectables[i].Y === Math.floor(position/states)){
			return true;
		}
	}
	return false;	
}
function updatepickup(playerObject,position){
	for(var i=0;i<global_collectables.length;i++){
		if(global_collectables[i].X === Math.floor(position%states) && global_collectables[i].Y === Math.floor(position/states)){
			var gem = global_collectables[i];
			console.log("trying to pickup "+ gem);
			playerObject.collectables.push(gem);
			gem.spriteObj.position(-50,-50);
			gem.spriteObj.update();
			global_collectables.splice (i, i);
		}
	}
}
