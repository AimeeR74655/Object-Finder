status="";
video="";

function setup()
 {
     canvas = createCanvas(380, 380);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(380, 380);
     video.hide();
 }

 function modelLoaded()
 {
    console.log("Model Loaded");
    status=true;
 }

 function start()
{
    objectDetctor= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 380, 380);
}

