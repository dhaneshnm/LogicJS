/***used in gameloop.js**********/
var current_player;
var map;
var winning_position = 75;//dfault,actual value will be set in map function
var scene;
var meshArray = [];
var left_avtar = 'images/man_left.gif';
var right_avtar = 'images/man_right.gif';
var straight_avtar = 'images/man_straight.gif';
var back_avtar = 'images/man_back.gif';
var global_collectables = new Array();
var level = 1;
var state_image_map = {"forward":straight_avtar,"back":back_avtar,"left":left_avtar,"right":right_avtar} ;
/***********used in map.js *********/
var startandend = {"level":1};
/***************used in path.js**********/
var openlist = [];
var closedlist =[];
var processedlist = [];
var map_size = 9;
/************used in fsm.js *****************/
var states = 9;
/****class functions***********/
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