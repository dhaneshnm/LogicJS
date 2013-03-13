var generate_map = function generate_map(level){
	var Map = new Array(9);
	for (var i = 0; i < Map.length; i++) {
		Map[i] = new Array(9);
		for (var j = 0; j < Map[i].length; j++) {
			Map[i][j] = 0;
		};
	};
	switch(level){
		case 1:
			winning_position = 50;
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[5][2] = 1;
			Map[1][8] = 1;
			Map[3][0] = 1;			
			Map[0][0] = -1;//start
			var final_row = Math.floor(winning_position/9);
			var final_column = Math.floor(winning_position%9);
			Map[final_row][final_column] = 2;//end
			var gem_1 = new collectable(2,4);
			global_collectables.push(gem_1);

			var gem_2 = new collectable(3,5);
			global_collectables.push(gem_2);

			break;			
		case 2:
			winning_position = 80;
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[5][2] = 1;
			Map[1][8] = 1;
			Map[3][0] = 1;			
			Map[0][0] = 2;//start
			var final_row = Math.floor(winning_position/9);
			var final_column = Math.floor(winning_position%9);
			Map[final_row][final_column] = 2;//end
			var gem_1 = new collectable(4,2);
			global_collectables.push(gem_1);

			var gem_2 = new collectable(5,3);
			global_collectables.push(gem_2);

			var gem_3 = new collectable(4,6);
			global_collectables.push(gem_3);

			var gem_4 = new collectable(8,3);
			global_collectables.push(gem_4);
			break;			
		case 3:
			winning_position = 40;
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[5][2] = 1;
			Map[1][8] = 1;
			Map[3][0] = 1;			
			Map[0][0] = 2;//start
			var final_row = Math.floor(winning_position/9);
			var final_column = Math.floor(winning_position%9);
			Map[final_row][final_column] = 2;//end
			var gem_1 = new collectable(4,2);
			global_collectables.push(gem_1);

			var gem_2 = new collectable(5,3);
			global_collectables.push(gem_2);

			var gem_3 = new collectable(4,6);
			global_collectables.push(gem_3);

			var gem_4 = new collectable(8,3);
			global_collectables.push(gem_4);
			break;			
		case 4:
			winning_position = 60;
			Map[1][1] = 1;
			Map[0][2] = 1;
			Map[2][3] = 1;
			Map[1][4] = 1;
			Map[5][2] = 1;
			Map[1][8] = 1;
			Map[3][0] = 1;			
			Map[0][0] = 2;//start
			var final_row = Math.floor(winning_position/9);
			var final_column = Math.floor(winning_position%9);
			Map[final_row][final_column] = 2;//end
			var gem_1 = new collectable(4,2);
			global_collectables.push(gem_1);

			var gem_2 = new collectable(5,3);
			global_collectables.push(gem_2);

			var gem_3 = new collectable(4,6);
			global_collectables.push(gem_3);

			var gem_4 = new collectable(8,3);
			global_collectables.push(gem_4);
			break;			
		default:
		    break;	

	};
	return Map;
}