var gameloop = function gameloop(level) {
 "use strict"; 
 map = generate_map(level);	
 renderUI(map);	
};
function renderUI(maparray){	
 if(level >1){
  scene.reset();
  //scene = sjs.Scene({w:640, h:480});
 }
 else{
  scene = sjs.Scene({w:640, h:480});
 }
 // load the images in parallel. When all the images are
 // ready, the callback function is called.
 scene.loadImages([left_avtar,right_avtar,straight_avtar,back_avtar,'images/Rocks.png','images/Dirts.png',"images/Ice.png","images/Crate.png"],       function() {
  var meshlayer = scene.Layer("background");
  var mesh = scene.Sprite(false, {layer:meshlayer, color:"red"});
  mesh.size(600,450);
  mesh.update();
  var uniBlock = 50;	
  meshArray = [];	
  for(var j=0;j<9;j++){
   var blockarray = new Array(9);
   for(var i=0;i<9;i++){
    if(maparray[j][i] == 0){
     blockarray[i] = scene.Sprite('images/Rocks.png', {layer:meshlayer, color:"#c0c0c0"});
    }
    else if(maparray[j][i] == 1){
     blockarray[i] = scene.Sprite('images/Dirts.png', {layer:meshlayer, color:"#c0c0c0"});	
    }	
    else{
     blockarray[i] = scene.Sprite('images/Ice.png', {layer:meshlayer, color:"#c0c0c0"});	
    }
   blockarray[i].size(49,49);
   blockarray[i].move(uniBlock*i,uniBlock*j);
   blockarray[i].update();		
  }
  meshArray.push(blockarray);
 }	
 for(var gem_count =0;gem_count < global_collectables.length;gem_count++){
  //var foreground = scene.Layer("foreground");
  var gemsprite = get_Sprite("forward");
  gemsprite.loadImg(global_collectables[gem_count].image);
  gemsprite.position(global_collectables[gem_count].X*50,global_collectables[gem_count].Y*50);			
  global_collectables[gem_count].spriteObj = gemsprite;
  global_collectables[gem_count].spriteObj.update();
 }
 //var player = scene.Sprite(straight_avtar,{layer:foreground,color:"grey"});
 var player = get_Sprite("forward");
 player.size(32,34);
 player.position(Math.floor(startandend.start/9),Math.floor(startandend.start%9));
 player.update();
 current_player = new game_player(0,player);
 //console.log(current_player.state.get_movement());
 console.log(current_player.spriteObj);
 //setTimeout(function(){playermove(100,0,player);},3000);
 $(document).ready(function(){	
  $("#code_wrapper #go_button").click(function(){		
   var function_window_id = "#code_window";
   executeCode(function_window_id);
  });
  $("#code_wrapper #reset_button").click(function(){
   $("#code_window").val("");
   window.location.reload();
  });
  $("#code_wrapper #navmode_add").click(function(){
    $("#code_window").keydown(function(){
     if(event.which == 186){
      execute_line();
     }
    });
    $(this).hide();
    $("#code_wrapper #navmode_remove").show();
  });
  $("#code_wrapper #navmode_remove").click(function(){
   $("#code_window").unbind("keydown");
   $(this).hide();
   $("#code_wrapper #navmode_add").show();
  });				
   $("#code_wrapper #show_path").click(function(){				
    GeneratePath();
    $(this).hide();
    $("#code_wrapper #hide_path").show();
   });
   $("#code_wrapper #hide_path").click(function(){				
    ClearPath();		
    $(this).hide();
    $("#code_wrapper #show_path").show();
   });
 });	   
});	
}
function get_Sprite(state){
 "use strict";
 var foreground ,player;
 foreground= scene.Layer("foreground");
 player = scene.Sprite(state_image_map[state],{layer:foreground,color:"grey"}); 
 return player;
}
function simpleParse(code){
 "use strict";
 var program = code.split(";");
 return program;
}

function executeCode(function_window_id){
 "use strict";
 var code,i,program;
 code  = $(function_window_id).val();
 console.log(code);
 code = code.replace(/(\r\n|\n|\r)/gm,"");
 code = code.replace(/(\s)/gm,"");
 program = simpleParse(code);   
 for(i=0;i<program.length;i=i+1){
  interpret_move(program[i],current_player);        
 }  
}
function execute_line(){
 "use strict";
 var code,program,line_code;
 code = $("#code_window").val();
 program = simpleParse(code);
 console.log(program.length);         
 line_code = program[program.length-1];
 line_code = line_code.trim().toLowerCase();
 interpret_move(line_code,current_player);    
}
gameloop(level);
function ShowPath(thePath){
 "use strict";
 for(var index =1;index <thePath.length-1;index++){
  LoadPathImage(meshArray[thePath[index].row_number][thePath[index].column_number]);          
 }
}
function HidePath(thePath){
 "use strict";
 for(var index =1;index <thePath.length-1;index++){
  ClearPathImage(meshArray[thePath[index].row_number][thePath[index].column_number]);         
 }
}
function LoadPathImage(boxSprite){
 "use strict";
 boxSprite.loadImg("images/Ice.png");
 boxSprite.update();
}
function ClearPathImage(boxSprite){
 "use strict";
 boxSprite.loadImg("images/Rocks.png");
 boxSprite.update();
}

function GeneratePath(){
 "use strict";
 var collectables,start,end,path,startend,i;
 collectables = startandend.collectables;
 start = startandend.start; 
 end = null;
 for (i = 0; i < collectables.length; i=i+1) {
  end = collectables[i];    
  startend = {"start":start,"end":end};
  path = paths(map,startend);
  console.log(path);
  ShowPath(path);
  start = end;
  end = null;
 }  
 end = startandend.end; 
 startend = {"start":start,"end":end}
 path = paths(map,startend);  
 console.log(path);
 ShowPath(path);
}

function ClearPath(){
 "use strict";
 var collectables,start,end,path,startend,i;
 collectables = startandend.collectables;
 start = startandend.start;
 end = null;
 for (i = 0; i < collectables.length; i=i+1) {
  end = collectables[i];
  console.log(start);
  console.log(end);
  startend = {"start":start,"end":end};
  path = paths(map,startend);
  HidePath(path);
  start = end;
  end = null;
 }  
 end = startandend.end; 
 startend = {"start":start,"end":end}
 path = paths(map,startend);
 HidePath(path);
}