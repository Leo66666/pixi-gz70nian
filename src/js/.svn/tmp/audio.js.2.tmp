let mieSwitch = 0;
let renSwitch = 0;
let airSwitch = 0;
let windSwitch = 0;

function playAudio(progress) {
    if (progress >= 0.4 && progress <= 0.41) {
        playBgmAfterLoading('mie');
    }else if (progress >= 0.2 && progress <= 0.207) {
        playBgmAfterLoading('cat');
    }else if (progress >= 0.62 && progress <= 0.63) {
        playBgmAfterLoading('moon');
    }else if (progress >= 0.5 && progress <= 0.51) {
        playBgmAfterLoading('air');
    }
}
function stopAudio(name) {
    document.querySelectorAll('audio').forEach(item => {
        if (item.id != name) {
            item.pause();
        }
    })
}
function playBgmAfterLoading(e, next, wait) {
    playBgm(e);
    mieSwitch = true;
    if (next) {
        setTimeout(function () {
            playBgm(next);
        }, wait);
    }
}

function playBgm(e) {
    let audio = document.getElementById(e);
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
            // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
            // alert(res.err_msg);
            audio.play();
        });
    } else {
        audio.play();
    }
}