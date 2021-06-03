var GGX;
var GGY;
var W = document.documentElement.clientWidth;
var H = ((document.body.offsetWidth + 77) / 2) + 30;
var PercentX;
var PercentY;
var click = false;
var Select1 = false;
var Select2 = false;
var Select3 = false;
var Select4 = false;
var Select5 = false;
var istap1 = false;
var istap2 = false;
var istap3 = false;
var istap4 = false;
var istap5 = false;
setInterval(mouseX, 1) //一秒畫30次
setInterval(mouseY, 1) //一秒畫30次
var mouse = {
    x: 0,
    y: 0
} //物件
var my_body = document.getElementById('my_body');
my_body.addEventListener("mousemove", function (evt) {

    mouse.x = evt.offsetX
    mouse.y = evt.pageY
    H = ((document.body.offsetWidth + 77) / 2) + 30;
    if (mouse.x > W / 21 && mouse.x < W * 20 / 21) {

        GGX = mouse.x;
    } else if (mouse.x <= W / 21) {
        GGX = W / 21;
    } else {
        GGX = W * 20 / 21;
    }

    if (mouse.y > H / 11 && mouse.y < H * 10 / 11) {
        GGY = mouse.y;
    } else if (mouse.y <= H / 11) {
        GGY = H / 11;
    } else {
        GGY = H * 10 / 11;
    }
    PercentX = GGX / W * 100;
    PercentY = GGY / H * 100;
})

function ShowXY() {

    console.log("X :" + PercentX);
    console.log("Y :" + PercentY);
}

var d1 = document.getElementById('my_body');
for (i = 0; i < 10; i++) { //自動生成div
    for (j = 0; j < 20; j++) {
        switch (i) {
            case 0:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY0" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY0" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY0" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY0" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY0" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY0" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY0" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY0" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY0" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY0" ></div>');
                        break;
                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY0" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY0" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY0" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY0" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY0" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY0" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY0" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY0" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY0" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY0" ></div>');
                        break;

                }
                break;
            case 1:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY1" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY1" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY1" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY1" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY1" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY1" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY1" ><div class="hashtag1">#eFoundry</div></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY1" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY1" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY1" ></div>');
                        break;
                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY1" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY1" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY1" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY1" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY1" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY1" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY1" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY1" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY1" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY1" ></div>');
                        break;

                }
                break;
            case 2:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY2" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY2" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY2" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY2" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY2" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY2" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x2 SizeX6 SizeY2" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY2" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY2" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY2" ></div>');
                        break;
                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY2" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY2" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY2" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY2" ><div class="hashtag4">#TSMC-Online</div></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY2" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY2" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY2" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY2" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY2" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY2" ></div>');
                        break;

                }
                break;
            case 3:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY3" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY3" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY3" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY3" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY3" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY3" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY3" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY3" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY3" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY3" ></div>');
                        break;
                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY3" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY3" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY3" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x2 SizeX13 SizeY3" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY3" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY3" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY3" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY3" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY3" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY3" ></div>');
                        break;

                }
                break;
            case 4:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY4" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY4" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY4" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY4" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY4" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY4" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY4" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY4" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY4" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY4" ></div>');
                        break;
                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY4" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY4" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY4" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY4" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY4" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY4" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY4" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY4" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY4" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY4" ></div>');
                        break;

                }
                break;
            case 5:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY5" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY5" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY5" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY5" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY5" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX5 SizeY5" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY5" ><div class="hashtag2">#資訊安全</div></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY5" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY5" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY5" ></div>');
                        break;

                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY5" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY5" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY5" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY5" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY5" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY5" ><div class="hashtag5">#智慧學習</div></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY5" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX17 SizeY5" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY5" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY5" ></div>');
                        break;
                }
                break;
            case 6:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY6" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY6" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY6" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY6" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY6" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY6" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x2 SizeX6 SizeY6" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY6" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY6" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY6" ><div class="hashtag3">#線上服務系統</div></div>');
                        break;

                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY6" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY6" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY6" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX13 SizeY6" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY6" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x2 SizeX15 SizeY6" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY6" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY6" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY6" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY6" ></div>');
                        break;
                }
                break;
            case 7:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY7" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY7" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY7" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX3 SizeY7" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY7" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY7" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY7" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY7" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY7" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x2 SizeX9 SizeY7" ></div>');
                        break;

                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY7" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY7" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX12 SizeY7" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY7" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX14 SizeY7" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY7" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY7" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY7" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY7" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY7" ></div>');
                        break;
                }
                break;
            case 8:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY8" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY8" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY8" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY8" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY8" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY8" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY8" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY8" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY8" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY8" ></div>');
                        break;

                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY8" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY8" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY8" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x3 SizeX13 SizeY8" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY8" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY8" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY8" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY8" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY8" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY8" ></div>');
                        break;
                }
                break;
            case 9:
                switch (j) {
                    case 0:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX0 SizeY9" ></div>');
                        break;
                    case 1:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX1 SizeY9" ></div>');
                        break;
                    case 2:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX2 SizeY9" ></div>');
                        break;
                    case 3:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX3 SizeY9" ></div>');
                        break;
                    case 4:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX4 SizeY9" ></div>');
                        break;
                    case 5:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX5 SizeY9" ></div>');
                        break;
                    case 6:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX6 SizeY9" ></div>');
                        break;
                    case 7:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX7 SizeY9" ></div>');
                        break;
                    case 8:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX8 SizeY9" ></div>');
                        break;
                    case 9:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX9 SizeY9" ></div>');
                        break;

                    case 10:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX10 SizeY9" ></div>');
                        break;
                    case 11:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX11 SizeY9" ></div>');
                        break;
                    case 12:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX12 SizeY9" ></div>');
                        break;
                    case 13:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX13 SizeY9" ></div>');
                        break;
                    case 14:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX14 SizeY9" ></div>');
                        break;
                    case 15:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX15 SizeY9" ></div>');
                        break;
                    case 16:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX16 SizeY9" ></div>');
                        break;
                    case 17:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX17 SizeY9" ></div>');
                        break;
                    case 18:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX18 SizeY9" ></div>');
                        break;
                    case 19:
                        d1.insertAdjacentHTML('beforeend', '<div class="x1 SizeX19 SizeY9" ></div>');
                        break;
                }
                break;

        }
    }
    // if (i + 5 == Math.floor(Math.random() * 10) + i) {
    //     d1.insertAdjacentHTML('beforeend', '<div class="x1 x2 size" ></div>');
    // } else {

    //     d1.insertAdjacentHTML('beforeend', '<div class="x1 x1 size" ></div>');
    // }
}
var Adjust = 0.5;
var AdjustXX;
let _LengthX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function CountAdjustXX() {
    AdjustXX = (99.5 - (_LengthX[0] + _LengthX[1] + _LengthX[2] + _LengthX[3] + _LengthX[4] +
        _LengthX[5] + _LengthX[6] + _LengthX[7] + _LengthX[8] + _LengthX[9] + _LengthX[10] +
        _LengthX[11] + _LengthX[12] + _LengthX[13] + _LengthX[14] + _LengthX[15] + _LengthX[16] +
        _LengthX[17] + _LengthX[18] + _LengthX[19])) / 20;
}

function mouseX() {
    CountAdjustXX();
    for (i = 0; i < 10; i++) {
        if (GGX > W * 1 / 21) {
            document.getElementsByClassName("SizeX0")[i].style.width = ((W * 1 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(0, 1, (((W * 1 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 1 / 21) {
            document.getElementsByClassName("SizeX0")[i].style.width = ((10 * (1 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(0, 1, 10 * (1 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 2 / 21) {
            document.getElementsByClassName("SizeX1")[i].style.width = ((W * 2 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(1, 1, (((W * 2 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 2 / 21) {
            document.getElementsByClassName("SizeX1")[i].style.width = ((10 * (2 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(1, 1, 10 * (2 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 3 / 21) {
            document.getElementsByClassName("SizeX2")[i].style.width = ((W * 3 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(2, 1, (((W * 3 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 3 / 21) {
            document.getElementsByClassName("SizeX2")[i].style.width = ((10 * (3 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(2, 1, 10 * (3 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 4 / 21) {
            document.getElementsByClassName("SizeX3")[i].style.width = ((W * 4 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(3, 1, (((W * 4 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 4 / 21) {
            document.getElementsByClassName("SizeX3")[i].style.width = ((10 * (4 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(3, 1, 10 * (4 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 5 / 21) {
            document.getElementsByClassName("SizeX4")[i].style.width = ((W * 5 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(4, 1, (((W * 5 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 5 / 21) {
            document.getElementsByClassName("SizeX4")[i].style.width = ((10 * (5 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(4, 1, 10 * (5 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 6 / 21) {
            document.getElementsByClassName("SizeX5")[i].style.width = ((W * 6 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(5, 1, (((W * 6 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 6 / 21) {
            document.getElementsByClassName("SizeX5")[i].style.width = ((10 * (6 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(5, 1, 10 * (6 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 7 / 21) {
            document.getElementsByClassName("SizeX6")[i].style.width = ((W * 7 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(6, 1, (((W * 7 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 7 / 21) {
            document.getElementsByClassName("SizeX6")[i].style.width = ((10 * (7 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(6, 1, 10 * (7 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 8 / 21) {
            document.getElementsByClassName("SizeX7")[i].style.width = ((W * 8 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(7, 1, (((W * 8 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 8 / 21) {
            document.getElementsByClassName("SizeX7")[i].style.width = ((10 * (8 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(7, 1, 10 * (8 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 9 / 21) {
            document.getElementsByClassName("SizeX8")[i].style.width = ((W * 9 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(8, 1, (((W * 9 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 9 / 21) {
            document.getElementsByClassName("SizeX8")[i].style.width = ((10 * (9 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(8, 1, 10 * (9 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 10 / 21) {
            document.getElementsByClassName("SizeX9")[i].style.width = ((W * 10 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(9, 1, (((W * 10 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 10 / 21) {
            document.getElementsByClassName("SizeX9")[i].style.width = ((10 * (10 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(9, 1, 10 * (10 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 11 / 21) {
            document.getElementsByClassName("SizeX10")[i].style.width = ((W * 11 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(10, 1, (((W * 11 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 11 / 21) {
            document.getElementsByClassName("SizeX10")[i].style.width = ((10 * (11 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(10, 1, 10 * (11 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 12 / 21) {
            document.getElementsByClassName("SizeX11")[i].style.width = ((W * 12 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(11, 1, (((W * 12 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 12 / 21) {
            document.getElementsByClassName("SizeX11")[i].style.width = ((10 * (12 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(11, 1, 10 * (12 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 13 / 21) {
            document.getElementsByClassName("SizeX12")[i].style.width = ((W * 13 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(12, 1, (((W * 13 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 13 / 21) {
            document.getElementsByClassName("SizeX12")[i].style.width = ((10 * (13 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(12, 1, 10 * (13 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 14 / 21) {
            document.getElementsByClassName("SizeX13")[i].style.width = ((W * 14 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(13, 1, (((W * 14 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 14 / 21) {
            document.getElementsByClassName("SizeX13")[i].style.width = ((10 * (14 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(13, 1, 10 * (14 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 15 / 21) {
            document.getElementsByClassName("SizeX14")[i].style.width = ((W * 15 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(14, 1, (((W * 15 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 15 / 21) {
            document.getElementsByClassName("SizeX14")[i].style.width = ((10 * (15 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(14, 1, 10 * (15 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 16 / 21) {
            document.getElementsByClassName("SizeX15")[i].style.width = ((W * 16 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(15, 1, (((W * 16 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 16 / 21) {
            document.getElementsByClassName("SizeX15")[i].style.width = ((10 * (16 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(15, 1, 10 * (16 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 17 / 21) {
            document.getElementsByClassName("SizeX16")[i].style.width = ((W * 17 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(16, 1, (((W * 17 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 17 / 21) {
            document.getElementsByClassName("SizeX16")[i].style.width = ((10 * (17 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(16, 1, 10 * (17 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 18 / 21) {
            document.getElementsByClassName("SizeX17")[i].style.width = ((W * 18 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(17, 1, (((W * 18 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 18 / 21) {
            document.getElementsByClassName("SizeX17")[i].style.width = ((10 * (18 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(17, 1, 10 * (18 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX > W * 19 / 21) {
            document.getElementsByClassName("SizeX18")[i].style.width = ((W * 19 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(18, 1, (((W * 19 / (2 * GGX) * Adjust))));
        } else if (GGX <= W * 19 / 21) {
            document.getElementsByClassName("SizeX18")[i].style.width = ((10 * (19 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(18, 1, 10 * (19 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    for (i = 0; i < 10; i++) {
        if (GGX >= W * 20 / 21) {
            document.getElementsByClassName("SizeX19")[i].style.width = ((W * 20 / (2 * GGX) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(19, 1, (((W * 20 / (2 * GGX) * Adjust))));
        } else if (GGX < W * 20 / 21) {
            document.getElementsByClassName("SizeX19")[i].style.width = ((10 * (20 - 21) * W / (20 * (GGX - W)) * Adjust + AdjustXX) + "%");
            //console.log("left");
            _LengthX.splice(19, 1, 10 * (20 - 21) * W / (20 * (GGX - W) / Adjust));
        }
    }
    CountAdjustXX();
}

var SizeYName = [
    'SizeY0',
    'SizeY1',
    'SizeY2',
    'SizeY3',
    'SizeY4',
    'SizeY5',
    'SizeY6',
    'SizeY7',
    'SizeY8',
    'SizeY9',
];
var Adjust_Y = 0.5;
var AdjustYY;
let _LengthY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function CountAdjustYY() {
    AdjustYY = (49.9 - (_LengthY[0] + _LengthY[1] + _LengthY[2] + _LengthY[3] + _LengthY[4] +
        _LengthY[5] + _LengthY[6] + _LengthY[7] + _LengthY[8] + _LengthY[9])) / 10;
}

function mouseY() {
    CountAdjustYY();
    for (j = 0; j < 10; j++) {
        for (i = 0; i < 20; i++) {
            if (GGY >= H * (j + 1) / 11) {
                document.getElementsByClassName(SizeYName[j])[i].style.paddingTop = ((H * 200 * (j + 1) / 121 / (GGY) * Adjust_Y) + "%");
                // console.log("Top");
                _LengthY.splice(j, 1, ((H * 200 * (j + 1) / 121 / (GGY) * Adjust_Y)));
            } else if (GGY < H * (j + 1) / 11) {
                document.getElementsByClassName(SizeYName[j])[i].style.paddingTop = ((1000 * (j - 10) * H / 121 / (10 * (GGY - H))) + "%");
                // console.log("Botton");
                _LengthY.splice(j, 1, (1000 * (j - 10) * H / 121 / (10 * (GGY - H))));
            }
        }
    }
    CountAdjustYY();
}

var CanDialog = false;
var dia1 = document.getElementById('my_dialog1');
var dia2 = document.getElementById('my_dialog2');
var dia3 = document.getElementById('my_dialog3');
var dia4 = document.getElementById('my_dialog4');
var dia5 = document.getElementById('my_dialog5');
my_body.addEventListener('mousemove', e => { //設定哪個點需要被觸摸有反應
    if (PercentX > 30.20 &&
        PercentX < 35.02 &&
        PercentY > 21.33 &&
        PercentY < 30.11) {
        document.getElementsByClassName("pic")[0].style.cursor = "pointer";
        document.getElementsByClassName("hashtag1")[0].style.display = "block";
        CanDialog = true;
        istap1 = true;

    } else if (PercentX > 30.20 &&
        PercentX < 35.02 &&
        PercentY > 56.58 &&
        PercentY < 65.51) {
        document.getElementsByClassName("pic")[0].style.cursor = "pointer";
        document.getElementsByClassName("hashtag2")[0].style.display = "block";
        CanDialog = true;
        istap2 = true;

    } else if (PercentX > 44.59 &&
        PercentX < 49.42 &&
        PercentY > 65.51 &&
        PercentY < 74.13) {
        document.getElementsByClassName("pic")[0].style.cursor = "pointer";
        document.getElementsByClassName("hashtag3")[0].style.display = "block";
        CanDialog = true;
        istap3 = true;

    } else if (PercentX > 63.72 &&
        PercentX < 68.50 &&
        PercentY > 30.26 &&
        PercentY < 39.18) {
        document.getElementsByClassName("pic")[0].style.cursor = "pointer";
        document.getElementsByClassName("hashtag4")[0].style.display = "block";
        CanDialog = true;
        istap4 = true;

    } else if (PercentX > 73.21 &&
        PercentX < 78.04 &&
        PercentY > 56.58 &&
        PercentY < 65.51) {
        document.getElementsByClassName("pic")[0].style.cursor = "pointer";
        document.getElementsByClassName("hashtag5")[0].style.display = "block";
        CanDialog = true;
        istap5 = true;

    } else {
        document.getElementsByClassName("pic")[0].style.cursor = "unset";
        document.getElementsByClassName("hashtag1")[0].style.display = "none";
        document.getElementsByClassName("hashtag2")[0].style.display = "none";
        document.getElementsByClassName("hashtag3")[0].style.display = "none";
        document.getElementsByClassName("hashtag4")[0].style.display = "none";
        document.getElementsByClassName("hashtag5")[0].style.display = "none";
        CanDialog = false;
        // ToNone("dialog");
    }

    // document.getElementsByClassName("dialog")[0].style.top = (y - 10) + "px";
    // document.getElementsByClassName("dialog")[0].style.left = (x - 10) + "px";


})
dia1.addEventListener('mouseup', e => { //在dialog上放開

    click = false;
    Select1 = false;
})
dia2.addEventListener('mouseup', e => { //在dialog上放開

    click = false;
    Select2 = false;
})
dia3.addEventListener('mouseup', e => { //在dialog上放開

    click = false;
    Select3 = false;
})
dia4.addEventListener('mouseup', e => { //在dialog上放開

    click = false;
    Select4 = false;
})
dia5.addEventListener('mouseup', e => { //在dialog上放開

    click = false;
    Select5 = false;
})
var isDialog = false;

function OnMouseDown() { //滑鼠點
    if (CanDialog == true) {
        click = true;
    }
}

function OnMouseUp() { //滑鼠放
    click = false;
    Select1 = false;
    Select2 = false;
    Select3 = false;
    Select4 = false;
    Select5 = false;
    istap1 = false;
    istap2 = false;
    istap3 = false;
    istap4 = false;
    istap5 = false;
}
_Click();
CheckConsle();

function _Click() { //點擊到黑色區塊
    if (click == true) {
        if (istap1 == true) {
            Select1 = true;
        } else if (istap2 == true) {
            Select2 = true;
        } else if (istap3 == true) {
            Select3 = true;
        } else if (istap4 == true) {
            Select4 = true;
        } else if (istap5 == true) {
            Select5 = true;
        }
    }
    if (Select1 == true && isDialog == false) {
        TurnBig("dialog1");
        isDialog = true;
    }
    else if (Select2 == true && isDialog == false) {
        TurnBig("dialog2");
        isDialog = true;
    }
    else if (Select3 == true && isDialog == false) {
        TurnBig("dialog3");
        isDialog = true;
    }
    else if (Select4 == true && isDialog == false) {
        TurnBig("dialog4");
        isDialog = true;
    }
    else  if (Select5 == true && isDialog == false) {
        TurnBig("dialog5");
        isDialog = true;
    }
  
    requestAnimationFrame(_Click);
}

function CheckConsle() { //持續Console
     console.log(mouse.x);
    requestAnimationFrame(CheckConsle);
}

function TurnBig(ABCDE) { //呼叫出dialog
    document.getElementsByClassName(ABCDE)[0].style.display = "block";
}

function CloseIt1() {
    ToNone("dialog1");
}

function CloseIt2() {
    ToNone("dialog2");
}

function CloseIt3() {
    ToNone("dialog3");
}

function CloseIt4() {
    ToNone("dialog4");
}

function CloseIt5() {
    ToNone("dialog5");
}

function ToNone(AA) { //關閉dialog

    document.getElementsByClassName(AA)[0].style.display = "none";
    isDialog = false;
}

// function Mouseondiolog() {

//     console.log(isTap);
//     dia.addEventListener('mousemove', e => {

//         x = e.pageX;
//         y = e.pageY;
//         document.getElementsByClassName("dialog")[0].style.top = (y - 10) + "px";
//         document.getElementsByClassName("dialog")[0].style.left = (x - 10) + "px";

//         1
//     })
// }

// function mouseOver(x)
// {
//     x.style.width="10%";
//     x.style.paddingTop="10%";
//     console.log("OVER");
// }
// function mouseOut(x)
// {
//     x.style.width="5%";
//     x.style.paddingTop="5%";
//     console.log("OUT");
// }