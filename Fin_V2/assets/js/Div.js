var GGX;
var GGY;
var W = document.documentElement.clientWidth;
var H = document.documentElement.clientHeight;
// var H = ((document.body.offsetWidth + 77) / 2) + 30;
var PercentX;
var PercentY;

if( W >= 960 ) {
    drawGrids();
}else {
    console.log('mobile');
}

function drawGrids() {
    setInterval(mouseX, 1) //一秒畫30次
    setInterval(mouseY, 1) //一秒畫30次
    var mouse = {
        x: 0,
        y: 0
    } //物件
    var my_body = document.getElementById('my_body');
    my_body.addEventListener("mousemove", function (evt) {
        mouse.x = evt.pageX
        mouse.y = evt.pageY

        // H = ((document.body.offsetWidth + 77) / 2) + 30;
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

    var d1 = document.getElementById('my_body');
    for (i = 0; i < 10; i++) { //自動生成div
        for (j = 0; j < 20; j++) {
            switch (i) {
                case 0:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY0" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY0" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY0" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY0" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY0" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY0" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY0" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY0" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY0" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY0" ></div>');
                            break;
                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY0" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY0" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY0" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY0" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY0" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY0" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY0" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY0" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY0" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY0" ></div>');
                            break;

                    }
                    break;
                case 1:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY1" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY1" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY1" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY1" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY1" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY1" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY1" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY1" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY1" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY1" ></div>');
                            break;
                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY1" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY1" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY1" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY1" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY1" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY1" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY1" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY1" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY1" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY1" ></div>');
                            break;

                    }
                    break;
                case 2:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY2" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY2" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY2" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY2" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY2" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY2" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block black-block SizeX6 SizeY2" ><div class="hashtag hashtag1" id="hashtag1" data-id="hashtags"><div class="hashtag_content">#eFoundry</div></div></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY2" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY2" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY2" ></div>');
                            break;
                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY2" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY2" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY2" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY2" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY2" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY2" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY2" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY2" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY2" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY2" ></div>');
                            break;

                    }
                    break;
                case 3:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY3" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY3" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY3" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY3" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY3" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY3" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY3" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY3" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY3" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY3" ></div>');
                            break;
                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY3" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY3" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY3" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block black-block SizeX13 SizeY3" ><div class="hashtag hashtag2" id="hashtag2" data-id="hashtags"><div class="hashtag_content">#TSMC-Online</div></div></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY3" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY3" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY3" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY3" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY3" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY3" ></div>');
                            break;

                    }
                    break;
                case 4:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY4" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY4" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY4" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY4" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY4" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY4" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY4" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY4" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY4" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY4" ></div>');
                            break;
                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY4" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY4" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY4" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY4" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY4" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY4" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY4" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY4" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY4" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY4" ></div>');
                            break;

                    }
                    break;
                case 5:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY5" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY5" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY5" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY5" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY5" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX5 SizeY5" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY5" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY5" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY5" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY5" ></div>');
                            break;

                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY5" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY5" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY5" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY5" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY5" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY5" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY5" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX17 SizeY5" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY5" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY5" ></div>');
                            break;
                    }
                    break;
                case 6:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY6" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY6" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY6" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY6" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY6" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY6" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block black-block SizeX6 SizeY6" ><div class="hashtag hashtag3" id="hashtag3" data-id="hashtags"><div class="hashtag_content">#資訊安全</div></div></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY6" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY6" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY6" ></div>');
                            break;

                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY6" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY6" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY6" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX13 SizeY6" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY6" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block black-block SizeX15 SizeY6" ><div class="hashtag hashtag5" id="hashtag5" data-id="hashtags"><div class="hashtag_content">#智慧學習</div></div></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY6" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY6" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY6" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY6" ></div>');
                            break;
                    }
                    break;
                case 7:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY7" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY7" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY7" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX3 SizeY7" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY7" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY7" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY7" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY7" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY7" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block black-block SizeX9 SizeY7" ><div class="hashtag hashtag4" id="hashtag4" data-id="hashtags"><div class="hashtag_content">#線上服務系統</div></div></div>');
                            break;

                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY7" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY7" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX12 SizeY7" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY7" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX14 SizeY7" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY7" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY7" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY7" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY7" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY7" ></div>');
                            break;
                    }
                    break;
                case 8:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY8" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY8" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY8" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY8" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY8" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY8" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY8" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY8" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY8" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY8" ></div>');
                            break;

                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY8" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY8" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY8" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block gray-block SizeX13 SizeY8" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY8" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY8" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY8" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY8" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY8" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY8" ></div>');
                            break;
                    }
                    break;
                case 9:
                    switch (j) {
                        case 0:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX0 SizeY9" ></div>');
                            break;
                        case 1:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX1 SizeY9" ></div>');
                            break;
                        case 2:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX2 SizeY9" ></div>');
                            break;
                        case 3:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX3 SizeY9" ></div>');
                            break;
                        case 4:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX4 SizeY9" ></div>');
                            break;
                        case 5:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX5 SizeY9" ></div>');
                            break;
                        case 6:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX6 SizeY9" ></div>');
                            break;
                        case 7:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX7 SizeY9" ></div>');
                            break;
                        case 8:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX8 SizeY9" ></div>');
                            break;
                        case 9:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX9 SizeY9" ></div>');
                            break;

                        case 10:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX10 SizeY9" ></div>');
                            break;
                        case 11:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX11 SizeY9" ></div>');
                            break;
                        case 12:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX12 SizeY9" ></div>');
                            break;
                        case 13:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX13 SizeY9" ></div>');
                            break;
                        case 14:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX14 SizeY9" ></div>');
                            break;
                        case 15:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX15 SizeY9" ></div>');
                            break;
                        case 16:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX16 SizeY9" ></div>');
                            break;
                        case 17:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX17 SizeY9" ></div>');
                            break;
                        case 18:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX18 SizeY9" ></div>');
                            break;
                        case 19:
                            d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block SizeX19 SizeY9" ></div>');
                            break;
                    }
                    break;

            }
        }
        // if (i + 5 == Math.floor(Math.random() * 10) + i) {
        //     d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-blockblack-block size" ></div>');
        // } else {

        //     d1.insertAdjacentHTML('beforeend', '<div class="normal-block white-block x1 size" ></div>');
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

    CheckConsle();


    function CheckConsle() { //持續Console
        //  console.log(isDialog);
        requestAnimationFrame(CheckConsle);
    }

}
