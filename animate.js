let playerState = "fall";

let dropdown = document.getElementById("actions");
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})


const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 400;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
 
// let frameX = 0;
// let frameY = 3;
let gameFrame = 0;
let staggerFrames = 5;
const spriteAnimation =[];
const animationStates =[
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimation[state.name] = frames;
});
console.log(spriteAnimation);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(50, 50, 100, 100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)


    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position
    let frameY = spriteAnimation[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth - 200, spriteHeight - 200);
    // if(gameFrame % staggerFrames == 0){
    //     if(frameX < 6) frameX++;
    //     else frameX = 0;
    // }
    gameFrame++;
    
    requestAnimationFrame(animate);
};

animate();