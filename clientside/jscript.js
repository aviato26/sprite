
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let character = {
  img: null,
  xVel: 0,
  yVel: 0,
  x: 0,
  y: 80,
  currentFrame: 0,
  totalFrames: 4,
  walkingRight: [42,74],
  walkingLeft: [106,138],
  standingStill: [10,10],

  walkingVel: function(e){
    if(e.key === "ArrowRight"){
      this.x += 10;
      animate(this.walkingRight);
    }
    if(e.key === "ArrowLeft"){
      this.x -= 10;
      animate(this.walkingLeft);
    }
  }
}

character.timer = null;

character.img = new Image();
character.img.src = './sprites.png'


function animate(frame){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(character.img, frame[character.currentFrame] , 0, 25, 35, character.x, character.y, 70, 70);
  if(character.currentFrame < 1){
      character.currentFrame++;
  } else {
      character.currentFrame = 0;
  }
}

document.addEventListener('keydown', (e) => {
  character.walkingVel(e)
})

document.addEventListener('keyup', (e) => {
  animate(character.standingStill)
})
