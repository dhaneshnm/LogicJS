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


function collectable(){
	this.image ='images/ruby_64.png';
	this.X = 0;
	this.Y = 0;
}