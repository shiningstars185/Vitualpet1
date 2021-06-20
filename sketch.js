//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg

function preload()
{
	//load images here
 dogImg = loadImage("images/dogImg.png");
 happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);

 // text(mouseX +" , " + mouseY, 30,45)
  
  dog = createSprite(250,250,10,10)
  dog.addImage=(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg)
  }

  drawSprites();

  textSize(13)
  fill(255,255,255)
  text("foodRemaining:"+foodS,170,200)
  text("Note:Press UP_ARROW key to feed Drago milk",130,10,300,20)

  //add styles here

}
//function to read value from database
function readStock(data){
  foodS = data.val()
}

//function to write values in database
function writeStock(x){

  if(x<=0){
    x=0;
  }

  else{
    x=x+1;
  }

database.ref('/').update({
  Food:x
})
}


