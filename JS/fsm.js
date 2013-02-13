var fsmMain = function fsmMain (states) {
	function State(towhere){
		this.movement = towhere;	
	}
	State.prototype.get_movement = function() {		
		return this.movement;
	};	
	function player(currentPosition){
		this.Position = currentPosition;
		this.state = new State("forward");
	}
	var PlayerMove = function PlayerMove(playerObject){	
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
	var StateChange = function StateChange(newstate,playerObject){
		switch(playerObject.state.get_movement()){
			case "forward"://move  forward
		 		if(newstate === "forward") {
		 			playerObject.state = new State("forward");
		 			PlayerMove(playerObject);
		 		}
		 		else if(newstate === "left"){
		 			playerObject.state = new State("left");
		 		}
		 		else if(newstate == "right"){
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
	var getStartandEnd = function(trial){
		var start = [1,3,5,5,1,7,3,2];
		var end =[2,6,3,7,28,1,5,3];
		var startandEnd ={"start":start[trial],"end":end[trial]};
		return startandEnd;
	}	
	function play(program){
		var firstState = new State("forward");	
		var gameObject = new player(states);
		gameObject.Position = startandend.start;				
		for(var i=0;i<program.length;i++){
			StateChange(program[i],gameObject);						
		}
		console.log(startandend.end);
		console.log(gameObject.state.get_movement());
		console.log(gameObject.Position);
		if(startandend.end === gameObject.Position){
			console.log("won");
		}
		else{
			console.log("lost");
		}
	}
	var startandend = getStartandEnd(4);
	program =["forward","left","forward","right","forward","left","forward","forward","forward","forward","forward","forward"];
	play(program);
}
fsmMain(10);	