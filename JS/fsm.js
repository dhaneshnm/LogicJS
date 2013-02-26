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
		 		break;
	 		case "right":
		 		if(newstate === "move") {
			 			playerObject.state = new State("right");
			 			PlayerMove(playerObject);
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
	}		
function game_player(currentPosition,spr){
		this.Position = currentPosition;
		this.state = new State("forward");
		this.spriteObj = spr;
	}	
function State(towhere){
	this.movement = towhere;	
}
State.prototype.get_movement = function() {		
		return this.movement;
	};	
function updatemotion(playerObject,new_position){
	if(new_position == winning_position){
		console.log("You have arrived ..");
	}
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