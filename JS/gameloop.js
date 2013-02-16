
var gameloop = function gameloop() {
	//1.render UI on canvass.
	RenderUI();	
	//2.Wait for user to hit "go".
	//3.Pass user program to execute module,ie call execute module.
	fsmMain(10);
	//4.execute module runs the simulation and returns result.
	//5.Incvoke AI module and pass the result.
	//6.AI module computes all possible paths and computes the user score.	
	//7.If score is above 8,player repeat game loop for next level.
	//8.if score less than at,wait player to hit "replay".
	//9.on replay,repeat gameloop.
}
function RenderUI(){
	var scene = sjs.Scene({w:640, h:480});
	var foreground = scene.Layer("foreground");
	var player = scene.Sprite("images/thief.GIF", foreground);

}
gameloop();