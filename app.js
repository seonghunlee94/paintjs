// canvas란 요소는 context를 통해 픽셀에 접근할 수 있다. 먼저 canvas.getContext()를 통해 context variable을 만든다.

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
        console.log(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

// function onMouseUp(event) {
//     stopPainting();
// }


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
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
