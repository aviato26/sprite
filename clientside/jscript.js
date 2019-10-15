
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let character = {
  img: null,
  x: 0,
  y: 0,
  width: 32,
  height: 32,
  currentFrame: 0,
  totalFrames: 4
}

character.timer = null;

character.img = new Image();
character.img.src = './sprites.png'


function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.drawImage(character.img, character.currentframe * character.width, 0, character.width, character.height, 0, 0, character.width, character.height);
  ctx.drawImage(character.img, 10 + (character.width * character.currentFrame), 0, 15, 35, 70, 70, 70, 70);
  character.currentFrame++;
  if(character.currentFrame > character.totalFrames){
    character.currentFrame = 0;
  }
}

setInterval(animate, 390)
