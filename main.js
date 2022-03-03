function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9fOs_uK6s/modl.json'
    ,modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}