function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  x=ml5.imageClassifier('MobileNet',modelloded);
}
function modelloded(){
  console.log("model is loded");
}
function draw(){
  image(video,0,0,300,300);
  x.classify(video,ans);
}
var pr="";
function ans(error,result){
  if(error){
    console.log(error);
  }
  else{
    if((result[0].confidence > 0.5)&&(pr!=result[0].label)){
      console.log(result);
      pr=result[0].label;
      u=window.speechSynthesis;
      s="Object detected is"+result[0].label;
      h=new SpeechSynthesisUtterance(s);
      u.speak(h);
      document.getElementById("Object").innerHTML=result[0].label;
      document.getElementById("Accuracy").innerHTML=Math.floor(result[0].confidence*100)+"%";
    }
  }
}