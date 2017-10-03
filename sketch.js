var yH = [];
var yM = [];

function setup() {
  for (var i = 1; i<13; i++){
    yH[i] = 100 + 50*i;
    yM[i] = 100 + 50*i;
  }  

}

function draw() {

createCanvas(800,800);
background(200);

  var xH = 200;
  var xM = 600;

var M = minute();
//var M = 36;
//text("Current minute:\n" + m, 5, 100);
var S = second();
var H = hour();
//var H = 7;
  if(H>12) {
      H=H-12;
    } 
 if(H<1) {
      H=12;
    } 

strokeWeight(1);

for (i=1;i<H;i++){
  for (j=1;j<13;j++){
    line(xH,yH[i],xM,yM[j]);
  }
}
stroke(255);
strokeWeight(3);
for (j=1;j<=(floor(M/5));j++){
  line(xH,yH[H],xM,yM[j])
}

var p=(((M%5*60)+S)/300);
var xp=(xH+p*(xM-xH));
var yp=(yH[H]+(yM[ceil(M/5)]-yH[H])*p);
line(xH,yH[H],xp,yp);

fill(225);
for (i=1;i<13;i++){
  ellipse(xH,yH[i],15,15);
  ellipse(xM,yM[i],15,15);
}
}