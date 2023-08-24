function setup()
{
    video = createCapture(VIDEO);
    video.size(450, 400);
    canvas = createCanvas(450, 400);
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
    if(results.lengh > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#8515ff');
}