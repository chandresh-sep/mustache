noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/8krvCY6v/mustache.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function modeloaded()
{
    console.log('posenet is initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 60, 40);
}

function take_snapshot()
{
    save('myFilterImage.png') 
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX =results[0].pose.nose.x - 30;
        noseY =results[0].pose.nose.y - 5;

        console.log("nose x =" + noseX)
        console.log("nose y =" + noseY)
    }


}