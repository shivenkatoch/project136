status="";
input_text="";

function setup(){
    canvas=createCanvas(510,380);
    canvas.position(510,250);
    video=createCapture(VIDEO);
    video.size=(510,380);
    video.hide()
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    input_text=document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}

function draw(){
    image(video,0,0,510,380);
}