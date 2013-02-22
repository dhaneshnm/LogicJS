 var states = 9;
	function PlayerMove(playerObject){	
 		switch(playerObject.state.get_movement()){
 		case "forward"://move  forward
 			playerObject.Position = playerObject.Position+states;
 			updatemotion(playerObject);	
 			break;
 		case "back"://move  forward
 			playerObject.Position = playerObject.Position-states; 		 		
 			updatemotion(playerObject);
 			break;
 		case "left"://turn left
 			playerObject.Position = playerObject.Position+1; 			
 			updatemotion(playerObject);
 			break;
 		case "right"://turn right
	 		playerObject.Position = playerObject.Position-1;
	 		updatemotion(playerObject);
	 		break;
	 	default:
	 		console.log("invalid input for PlayerMove by "+playerObject.state.get_movement());
 		};
	}	
	function StateChange(newstate,playerObject){
		switch(playerObject.state.get_movement()){
			case "forward":
		 		if(newstate === "forward") {
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
		 		if(newstate === "forward") {
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
		 		if(newstate === "forward") {
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
		 		if(newstate === "forward") {
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
function updatemotion(playerObject){
	var x = Math.floor(playerObject.Position/states);
 	var y = Math.floor(playerObject.Position%states);
 	console.log(x+"booyaa"+y);
 	playerObject.spriteObj.position(y*50,x*50); 		 		
 	playerObject.spriteObj.update();
}