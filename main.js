canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width_car=100;
var height_car=300;
var y_coordinate_car=10;
var x_coordinate_car=10;

background_image = "parkingLot.jpg";
greencar_image = "th (2).jpg";

function add(){
    background_i=new Image();
    background_i.onload=upload_background;
    background_i.src=background_image;

     car=new Image();
	car.onload=upload_car;
    car.src=greencar_image;


}



function upload_background() {
	ctx.drawImage(background_i,0,0,canvas.width,canvas.height);

}

function upload_car() {
	ctx.drawImage(car,x_coordinate_car,y_coordinate_car,width_car,height_car);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
		if (y_coordinate_car >=0){
			y_coordinate_car = y_coordinate_car-10;
			console.log("x position of car is = "+x_coordinate_car + "| y position of car is = "+y_coordinate_car);
			upload_background();
			upload_car();
			 
		}
	
}

function down()
{
	if (y_coordinate_car <=700){
        y_coordinate_car = y_coordinate_car+10;
        console.log("x position of car is = "+x_coordinate_car + "| y position of car is = "+y_coordinate_car);
        upload_background();
        upload_car();
         
    }
}

function left()
{
	if (x_coordinate_car >=0){
        x_coordinate_car = x_coordinate_car-10;
        console.log("x position of car is = "+x_coordinate_car + "| y position of car is = "+y_coordinate_car);
        upload_background();
        upload_car();
}

function right()
{
	if (x_coordinate_car <=800){
        x_coordinate_car = x_coordinate_car+10;
        console.log("x position of car is = "+x_coordinate_car + "| y position of car is = "+y_coordinate_car);
        upload_background();
        upload_car();
         
    }
}
