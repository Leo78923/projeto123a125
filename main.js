difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(350, 300);
    canvas = createCanvas(550, 500);
    canvas.position(560, 125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet was initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}

function draw()
{
    background('#8515ff');
    document.getElementById("font_size").innerHTML = "O tamanho da fonte será de = " + difference + "px";
    textSize(difference);
    fill('#1cfb4b');
    text('Leo',50, 400);
}