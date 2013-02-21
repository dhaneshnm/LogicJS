 var states = 9;
	function PlayerMove(playerObject){	
 		switch(playerObject.state.get_movement()){
 		case "forward"://move  forward
 			playerObject.Position = playerObject.Position+states; 		 		
 			break;
 		case "back"://move  forward
 			playerObject.Position = playerObject.Position-states; 		 		
 			break;
 		case "left"://turn left
 			playerObject.Position = playerObject.Position+1; 			
 			break;
 		case "right"://turn right
	 		playerObject.Position = playerObject.Position-1;
	 		break;
	 	default:
	 		console.log("invalid input");
 		};
	}	
	function StateChange(newstate,playerObject){
		switch(playerObject.state.get_movement()){
			case "forward"://move  forward
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
	 		case "left"://turn left
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
	 		case "right"://turn right
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
	 		default:
	 		console.log("invalid input");	
		}
		
	}	
	
function player(currentPosition,spr){
		this.Position = currentPosition;
		this.state = new State("forward");
		this.sprtrObj = spr;
	}	

function State(towhere){
		this.movement = towhere;	
	}
	State.prototype.get_movement = function() {		
		return this.movement;
	};	
