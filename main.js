nose_x=0
nose_y=0
leftwrist=0
rightwrist=0
difference=0
function preload()
{

}

function setup ()
{
canvas = createCanvas(400,400)
canvas.position(560,150);

video = createCapture(VIDEO)
video.size(550,500)

poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)

}

function modelLoaded(){
    console.log('PoseNet Is Initialised! :)')
}

function draw()
 {
    background("white")
    fill("black");
    stroke("gray")
    textSize(difference)
    text("timmy",nose_x,nose_y)
    
}

function gotPoses(results) {
    if(results.length >0)
        {
            console.log(results)
            nose_x=results[0].pose.nose.x;
            nose_y=results[0].pose.nose.y;
            leftwrist=results[0].pose.leftWrist.x;
            rightwrist=results[0].pose.rightWrist.x;
        difference=leftwrist-rightwrist;
        }
}