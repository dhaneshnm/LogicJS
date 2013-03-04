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
