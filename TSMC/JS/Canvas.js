// resizeCanvas();

// window.addEventListener('resize', resizeCanvas);
// var GGX;
// var GGY;

// function resizeCanvas() {

//     var canvas = document.getElementById('canvas_1');
//     canvas.width = document.documentElement.clientWidth
//     canvas.height = document.documentElement.clientHeight;
//     let XX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//     let turnXX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//     let YY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//     let turnYY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

//     for (i = 0; i < 30; i++) {
//         XX.splice(i, 1, (document.documentElement.clientWidth / 30 * i));
//         if (XX[i] < GGX) {
//             turnXX.splice(i, 1, (XX[i] - (document.documentElement.clientWidth / 10) * (GGX / document.documentElement.clientWidth)* (GGX / document.documentElement.clientWidth)));
//         } else {
//             turnXX.splice(i, 1, (XX[i] + (document.documentElement.clientWidth / 10) * (1-(GGX / document.documentElement.clientWidth)* (1-(GGX / document.documentElement.clientWidth)))));
//         }
//         draw_x(turnXX[i])
//     }
//     for (i = 0; i < 20; i++) {
//         YY.splice(i, 1, (document.documentElement.clientHeight / 20 * i));
//         if (YY[i] < GGY) {
//             turnYY.splice(i, 1, (YY[i] - (document.documentElement.clientHeight / 5) * (GGY / document.documentElement.clientHeight)* (GGY / document.documentElement.clientHeight)));
//         } else {
//             turnYY.splice(i, 1, (YY[i] + (document.documentElement.clientHeight / 5) * (1-(GGY / document.documentElement.clientHeight)* (1-(GGY / document.documentElement.clientHeight)))));
//         }
//         draw_y(turnYY[i])
//     }
// }

// function draw_x(x) {
//     var canvas = document.getElementById('canvas_1');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');

//         // Stroked triangle
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, document.documentElement.clientHeight);
//         ctx.closePath();
//         ctx.stroke();
//     }
// }

// function draw_y(y) {
//     var canvas = document.getElementById('canvas_1');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');

//         // Stroked triangle
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(document.documentElement.clientWidth, y);
//         ctx.closePath();
//         ctx.stroke();
//     }
// }
// setInterval(resizeCanvas, 1) //一秒畫30次
// var mouse = {
//     x: 0,
//     y: 0
// } //物件
// var my_body = document.getElementById('my_body');
// my_body.addEventListener("mousemove", function (evt) {

//     mouse.x = evt.offsetX
//     mouse.y = evt.offsetY

//     GGX = mouse.x;
//     GGY = mouse.y;
// })