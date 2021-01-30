const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops; 
function preload(){

}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    drops = new Drop(200,100);
}

function draw(){
background(0);

drops.display();

}