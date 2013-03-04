function game_player(currentPosition,spr){
		this.Position = currentPosition;
		this.state = new State("forward");
		this.spriteObj = spr;
		this.collectables = new Array();
	}	
function State(towhere){
	this.movement = towhere;	
}
State.prototype.get_movement = function() {		
		return this.movement;
	};	


function collectable(Position_X,Position_Y){
	this.image ='images/ruby_64.png';
	this.X = Position_X;
	this.Y = Position_Y;
	this.spriteObj = null;
}