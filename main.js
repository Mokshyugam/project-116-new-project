mustache_x=0;
mustache_y=0;

function preload()
{clown_mustache =loadImage('https://i.postimg.cc/V5yVsVDt/mustacheimage.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        mustache_x = results[0].pose.nose.x-15;
        mustache_y = results[0].pose.nose.y;
      console.log(mustache_x);
      console.log(mustache_y);
    }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_mustache, mustache_x ,mustache_y, 30, 30);
}

function take_snapshot()
{
  save("MyFilterImage.png");  
}

function modelLoaded()
{
  console.log("PoseNet is Initialized");
}