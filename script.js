
Webcam.set({
    width : 400,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function clickImg(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src = "' + data_uri + '" id = "result_img">';
    });
}

console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D5UNQE-3y/model.json',modelLoaded);

function modelLoaded(){
    console.log("The model has been loaded");
}
