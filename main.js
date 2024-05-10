noseX = 0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;

function setup(){
    video = createCapture(VIDEO)
    video = video.size(400, 400)

    canvas = createCanvas(500, 500)
    canvas.position(560, 150)

    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}

function draw(){
    background("#c0c0c0")
    textSize(25)
    fill("#003e3f")
    text("Your a Simon Legree", noseX, noseY )
}

function modelloaded(){
    console.log("Model is loaded :)")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY );
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LeftWristX = " + LeftWristX + "RightWristX = " + RightWristX + "Difference = " + difference);

    }
}