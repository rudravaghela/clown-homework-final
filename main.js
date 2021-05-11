eye_X = 0;
eye_Y = 0;

function preload(){
mage = loadImage("https://i.postimg.cc/QCfn0HnD/1737167-pirate-eye-patch-isolated-on-a-white-background-2.jpg");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  
function draw(){
  image(video,0,0,300,300);
  image(mage,eye_X,eye_Y,30,30);
} 

function take_snapshot(){
    save("rudra.png");
}

function gotPoses(results){
  if (results.length > 0)
{
  console.log(results);
  eye_X = results[0].pose.rightEye.x - 15;
  eye_Y = results[0].pose.rightEye.y - 15;
  console.log("right eye x = " +eye_X);
  console.log("right eye y = "+eye_Y);
  
}
}
