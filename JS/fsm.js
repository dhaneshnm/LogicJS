var fsmMain = function fsmMain (states) {
// body...
	function State(towhere){
	this.movement = towhere;	
	}
	State.prototype.get_movement = function() {
		// body...
		return this.movement;
	};
	
	function player(currentPosition){
	this.Position = currentPosition;
	this.state = new State("forward");
	}

	var PlayerMove = function PlayerMove(payerObject){
	//dictates rules on the game object can move from one box to another.
 		switch(payerObject.state.get_movement()){
 		case "forward"://move  forward
 		payerObject.Position = payerObject.Position+states; 		
 		break;
 		case "left"://turn left
 		payerObject.Position = payerObject.Position-1;
 		break;
 		case "right"://turn right
 		payerObject.Position = payerObject.Position+1;
 		break;
 		default:
 		console.log("invalid input");
 		};
	}	
	var StateChange = function StateChange(newstate,payerObject){
		payerObject.state =new State(newstate);
	}
	var getStartandEnd = function(trial){
		var start = [1,3,5,8,9,7,3,2];
		var end =[2,6,3,7,9,1,5,3];
		var startandEnd ={"start":start[trial],"end":end[trial]};
		return startandEnd;
	}	
	function play(program){
		var firstState = new State("forward");	
		var gameObject = new player(0);
		gameObject.Position = startandend.start;
		var theGameMaze = new Array(10);
		for(var i=0;i<10;i+=1){
			theGameMaze[i] = new Array(states);
		}	
		for(var i=0;i<program.length;i++){
			StateChange(program[i],gameObject);
			PlayerMove(gameObject);
			console.log(gameObject.Position);
		}
		console.log(startandend);

	}

	var startandend = getStartandEnd(0);
	program =["left","forward"];
	play(program);
}
fsmMain(10);



