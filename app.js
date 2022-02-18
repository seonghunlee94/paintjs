// canvas란 요소는 context를 통해 픽셀에 접근할 수 있다. 먼저 canvas.getContext()를 통해 context variable을 만든다.
// canvas는 HTML5의 한 요소
// canvas 안에 있는 픽셀들을 다루는 기능이 있다.
// canvas의 선택자를 통해 CSS에서 width와 height를 줘야 볼 수 있다.


// 그 후 윈도우가 얼만큼의 pixcel 크기와 넓이를 다루는지 canvas에게 알려줘야 한다. (width와 height을)

// canvas의 context를 갖는 것도 필요하다.
// context에서 픽셀들을 컨트롤한다.

// context.strokeStyle은 선들의 색상
// context.lineWidth는 그 선의 너비

// context.beginPath는 path를 시작한다.
// path = line , path는 선이다
// context.moveTo(x, y) : x, y 좌표를 path를 옮기는 작업

// context.lineTo(x, y) : path의 이전 위치에서부터 지금 위치까지 선을 만들어주는 작업
// context.stroke : 획을 긋는다. 


///////////////////////////////////////////////////
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jaRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;
// canvas는 두 개의 사이즈를 가져야 한다.
// 먼저 css 사이즈를 가져야 하고,
// element에서 pixcel을 다룰 수 있도록 width와 height을 지정해줘야 한다. -> 실제 픽셀 사이즈를 주는 것(pixel modifier에 사이즈 지정)
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        // console.log(x, y);
    } else {
        ctx.lineTo(x, y);
        if (!filling) {

            ctx.stroke();
        }
    }
}

function handleColorClick(event) {
    console.log(event);
    console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    // console.log(event);
    const size = event.target.value;
    ctx.lineWidth = size;

}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if (filling) {

        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event) {
    console.log(event);
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS[EXPORT]";
    console.log(link);
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

// array.from 메소드는 object를 array로 만들어준다.
//console.log(colors);
//console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

console.dir(range);
if (range) {
    range.addEventListener("input", handleRangeChange)
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}


// const canvas1 = document.querySelector('#jsCanvas');
// let painting1 = false;

// // console.dir(canvas);
// console.dir(canvas1);


// function onMouseMove1(event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     console.log(x, y);
//     console.log(painting1);
//     console.dir(painting1);
// }

// function onMouseLeave1(event) {
//     painting1 = false;
//     console.log(painting1);

// }

// if (canvas1) {
//     canvas1.addEventListener("mousemove", onMouseMove1);
//     canvas1.addEventListener("mouseleave", onMouseLeave1);
// }
