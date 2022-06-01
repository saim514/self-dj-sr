noseX=0;
noseY=0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("Very good website for stretching arms!")
}

function draw()
{
    background('#1976D2');
    document.getElementById("square_side").innerHTML = "Squares length and width is: " + difference + "px";
    fill("#84FFFF");
    stroke("#84FFFF");
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " and Nose Y = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("Left wrist X = " + leftwristX + ", right wrist X = " + rightwristX + ", and difference = " + difference);
    } 
}

