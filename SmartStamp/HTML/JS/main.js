window.onload = function () {
    let _Get = document.getElementById("get");
    let _GoGo = document.getElementById("gogo");
    let deleteT = (source, location, len) => {
        return source.substring(0, location) + source.substring(location + len, source.length);
    }
    let deletAll = (source, willDeleted) => {
        willDeleted = willDeleted.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
        return source.replace(new RegExp(willDeleted, "g"), "");
    }
    var _MyUrl;
    _Get.onclick = function () {


        axios.post('https://service.12cm.com.tw/echoss/api/issue_custom_coupon', {

            "coupon_id": "149",
            "user_id": "23design",
            "name": "二三設計大放送",
            "description": "4月底前來辦公室小冰箱前，就可以免費兌換冰涼爽口的各種啤酒與冰火！\n\n《注意事項》\n1.每人限制兌換一次，逾期無效。\n2.限當日飲用完畢。",
            "img_url": "https://23design.tw/wp-content/uploads/2017/01/logo-23design-mobile.png"


        }, {
            headers: {
                'Authorization': 'Basic MjNkZXNpZ246cjlyVThoOU1CTXJNWkFOblM1ZUpxTlla',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            _MyUrl = "https://service.12cm.com.tw/coupon/std/"+deletAll(deletAll(deleteT(res.request.response.toString(), 0, 40),"}"),'"');
            console.log(_MyUrl);
            document.getElementsByClassName("GetURL")[0].style.display = "block";
        }).catch(err => {
            console.log(err);
        });

        console.log("Get值");
    }
    _GoGo.onclick = function () {

        document.location.href=_MyUrl;


        console.log("領取優惠券");
    }
}
