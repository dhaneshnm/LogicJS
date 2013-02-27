var current_player;
var map;
var winning_position = 75;
var gameloop = function gameloop() {
	//1.render UI on canvass.
	map = generate_map(1);
	console.log(map[1][8]);
	RenderUI(map);	
	//2.Wait for user to hit "go".
	//3.Pass user program to execute module,ie call execute module.	
	//4.execute module runs the simulation and returns result.
	//5.Incvoke AI module and pass the result.
	//6.AI module computes all possible paths and computes the user score.	
	//7.If score is above 8,player repeat game loop for next level.
	//8.if score less than at,wait player to hit "replay".
	//9.on replay,repeat gameloop.
}
function RenderUI(maparray){
	var scene = sjs.Scene({w:640, h:480});
	// load the images in parallel. When all the images are
	// ready, the callback function is called.
	scene.loadImages(['images/man.gif','images/Rocks.png','images/Dirts.png',"images/Ice-BT.png"], function() {
		var meshlayer = scene.Layer("background");
		var mesh = scene.Sprite(false, {layer:meshlayer, color:"Blue"});
		mesh.size(450,450);
		mesh.update();
		var uniBlock = 50;
		var meshArray = new Array(9);
		for(var	 j=0;j<9;j++){
			var blockarray = new Array(10);
			for(var i=0;i<9;i++){
				if(maparray[j][i] == 0){
					blockarray[i] = scene.Sprite('images/Rocks.png', {layer:meshlayer, color:"#c0c0c0"});
				}
				else if(maparray[j][i] == 1)
				{
					blockarray[i] = scene.Sprite('images/Dirts.png', {layer:meshlayer, color:"#c0c0c0"});	
				}	
				else
				{
					blockarray[i] = scene.Sprite('images/Ice-BT.png', {layer:meshlayer, color:"#c0c0c0"});	
				}
				blockarray[i].size(49,49);
				blockarray[i].move(uniBlock*i,uniBlock*j);
				blockarray[i].update();		
			}
			meshArray.push(blockarray);
		}	
		var foreground = scene.Layer("background");
		var player = scene.Sprite('images/man.gif',{layer:foreground,color:"grey"});
		player.size(30,40);
		//player.move(50,0);
		player.update();
		current_player = new game_player(0,player);
		//console.log(current_player.state.get_movement());
		console.log(current_player.spriteObj);
		//setTimeout(function(){playermove(100,0,player);},3000);
		$(document).ready(function(){	
			$("#code_wrapper #go_button").click(function(){		
				var code = $("#code_window")[0].innerText;
				console.log(code);
				var program = simpleParse(code);
				console.log(program[0]);
				console.log(program[1]);
				//console.log(current_player.state.get_movement());
				for(var i=0;i<program.length;i++){			
					//setTimeout(function(){StateChange(program[i],current_player);},500);
					StateChange(program[i],current_player);				
				}
		});
	  });	   
	});
}
function simpleParse(code){
	var program = code.split(";");
	return program;
}
gameloop();