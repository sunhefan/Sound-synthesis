// let wave;
// let button;
// let slider;
// let playing =false;
// let env;
//
//
// function setup() {
//   createCanvas(400, 400);
//
//   env =new p5.Env();
//   env.setADSR(0.08, 0.1, 0.5, 1);
//   env.setRange(1.2,0);
//
//
//   wave = new p5.Oscillator();
//   // slider = createSlider(100,1200,440);
//
//   wave.setType('triangle');
//   wave.start();
//   wave.freq(400);
//   wave.amp(env); //change from 0 to env
//
//   button =createButton('play/pause');
//   button.mousePressed(toggle);
//
// }
//
// function draw() {
//
//   // wave.freq(slider.value());
//
//   if (playing){
//
//     background(25, 250, 247 );
//   } else{
//     background(50);
//   }
// }
//
// function toggle(){
//   env.play();
//   // if(!playing){
//   //   wave.amp(0.8,1);
//   //   playing =true;
//   // } else {
//   //   wave.stop();
//   //   wave.amp(0.8,1);
//   //   playing=false;
//   // }
// }

let osc;
let waveFormSelect;
let pNoise;
let button;



function preload(){
  soundFormats('mp3','ogg');

  // song = loadSound('assets/bell.mp3');
}


function setup(){
// createCanvas(windowWidth,windowHeight);
createCanvas(600,600);
osc= new p5.Oscillator();
//create a dropdown menu to change osc Type
createSpan('Select Waveform: ')
waveFormSelect= createSelect();

waveFormSelect.option('sine');
waveFormSelect.option('sawtooth');
waveFormSelect.option('square');
waveFormSelect.option('triangle');
waveFormSelect.changed(setWaveForm);

// button =createButton('play');
// button.mousePressed(toggle);

}




//
// function toggle(){
//   env.play();
//   if(!playing){
//     wave.amp(0.8,1);
//     playing =true;
//   } else {
//     wave.stop();
//     wave.amp(0.8,1);
//     playing=false;
//   }
// }




function setWaveForm(){
  osc.setType(waveFormSelect.value());
}

function draw (){

  pNoise = noise(frameCount / 20)*50;
  osc.freq(map(mouseX,0,width,60,1200) + pNoise);

  // osc.amp(map(mouseY, 0, height, .2, 0));
  osc.amp(map (sin(frameCount/20), -1, 1, 1, 0.2));
}

function mousePressed(){
    osc.start();
}

function mouseReleased(){
  osc.stop();
}
