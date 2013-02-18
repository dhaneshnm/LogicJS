
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

	// load the images in parallel. When all the images are
	// ready, the callback function is called.
	scene.loadImages(['images/thief.GIF','images/grid.jpg'], function() {
		var mesh = scene.Sprite('images/grid.jpg');
		mesh.update();
	    // create the Sprite object;
	    var sp = scene.Sprite('images/thief.GIF');
	    // change the visible size of the sprite
	    //sp.size(175,175);
	    // apply the latest visual changes to the sprite
	    // (draw if canvas, update attribute if DOM);
	    sp.update();
	    // change the offset of the image in the sprite
	    // (this works the opposite way of a CSS background)
	    //sp.offset(0, 0);
	    // various transformations
	    //sp.move(150, 300);
	    //sp.rotate(3.14 / 4);
	    //sp.scale(2);
	    //sp.setOpacity(0.8);

	    sp.update();
	});


}
gameloop();