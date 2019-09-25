// 创建PIXI应用
const w = document.body.clientWidth,
    h = document.body.clientHeight;
let app = new PIXI.Application({
    width: 750,
    height: h,
    backgroundColor: 0xe8f1fa,
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1,       // default: 1
    forceCanvas: true,
});

// 获取屏幕宽高，判断横屏还是竖屏
let min = (w < h) ? w : h;
let scale = min / 750;  // 根据设计稿尺寸进行缩放比例调整
console.log(w, h, min, "放大系数：", scale);

// 变量声明
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

// 资源加载列表
const loadList = {
    'home-bg': 'src/images/home-bg.png',
    'loading-icon': 'src/images/loading-icon.png',
    'loading-bg': 'src/images/loading-bg.png',
    'logo1': 'src/images/logo1.png',
    'bg1': 'src/images/bg.jpg',
    'bg2': 'src/images/bg.jpg',
    'bg3': 'src/images/bg.jpg',
    'bg4': 'src/images/bg.jpg',
    'bg5': 'src/images/bg.jpg',
    'bg6': 'src/images/bg.jpg',
    'bg7': 'src/images/bg.jpg',
    'bg8': 'src/images/bg.jpg',
    'bg9': 'src/images/bg.jpg',
    'bg10': 'src/images/bg.jpg',
    'bg11': 'src/images/bg.jpg',
    'bg12': 'src/images/bg.jpg',
    'bg13': 'src/images/bg.jpg',
    'bg14': 'src/images/bg.jpg',
    'bg15': 'src/images/bg.jpg',
    'point1': 'src/images/point.png',
    'point2': 'src/images/point.png',
    'point3': 'src/images/point.png',
    'point4': 'src/images/point.png',
    'point5': 'src/images/point.png',
    'point6': 'src/images/point.png',
    'point7': 'src/images/point.png',
    'point8': 'src/images/point.png',
    'point9': 'src/images/point.png',
    'point10': 'src/images/point.png',
    'share': 'src/images/share.png',
    'scene1-clouds1': 'src/images/scene1-clouds1.png',
    'scene1-tree2': 'src/images/scene1-tree2.png',
    'scene9-train': 'src/images/scene9-train.png',
    'scene15-bg1': 'src/images/scene15-bg1.png',
    'scene15-tower1': 'src/images/scene15-tower1.png',
    'scene15-clouds1': 'src/images/scene15-clouds1.png',
    'scene15-clouds2': 'src/images/scene15-clouds2.png',
    'scene15-clouds3': 'src/images/scene15-clouds3.png',
    'scene15-clouds5': 'src/images/scene15-clouds5.png',
    'scene5-clouds1': 'src/images/scene2-clouds4.png',
    'scene5-clouds2': 'src/images/scene4-clouds2.png',
    'scene5-clouds3': 'src/images/scene2-clouds4.png',
    'scene6-clouds1': 'src/images/scene4-clouds2.png',
    'scene6-clouds2': 'src/images/scene2-clouds2.png',
    'scene6-clouds3': 'src/images/scene4-clouds2.png',
    'scene6-clouds4': 'src/images/scene4-clouds2.png',
    'scene6-clouds5': 'src/images/scene2-clouds2.png',
    'scene6-clouds6': 'src/images/scene2-clouds2.png',
    'scene7-clouds1': 'src/images/scene2-clouds4.png',
    'scene7-clouds2': 'src/images/scene2-clouds2.png',
    'scene7-clouds3': 'src/images/scene1-clouds2.png',
    'scene8-clouds1': 'src/images/scene2-clouds4.png',
    'scene8-clouds2': 'src/images/scene1-clouds2.png',
    'scene8-clouds3': 'src/images/scene3-clouds3.png',
    'scene8-clouds4': 'src/images/scene2-clouds1.png',
    'scene9-clouds1': 'src/images/scene2-clouds4.png',
    'scene9-clouds2': 'src/images/scene3-clouds2.png',
    'scene9-clouds3': 'src/images/scene2-clouds4.png',
    'scene9-clouds4': 'src/images/scene2-clouds2.png',
    'scene9-clouds5': 'src/images/scene3-clouds4.png',
    'scene9-clouds6': 'src/images/scene3-clouds4.png',
    'scene11-clouds1': 'src/images/scene2-clouds3.png',
    'scene11-clouds2': 'src/images/scene1-clouds1.png',
    'scene11-clouds3': 'src/images/scene3-clouds1.png',
    'scene13-clouds1': 'src/images/scene13-clouds1.png',
    'scene13-clouds2': 'src/images/scene4-clouds1.png',
    'scene13-clouds3': 'src/images/scene4-clouds1.png',
    'scene13-clouds4': 'src/images/scene13-clouds2.png',
    'scene5-text1': 'src/images/scene5-text1.png',
    'scene8-dio1': 'src/images/dio.png',
    'scene8-dio2': 'src/images/dio.png',
    'scene8-dio3': 'src/images/dio.png',
    'scene3-dio': 'src/images/scene3-dio.png',
    'scene7-door': 'src/images/scene7-door.png',
    'scene10-tree1': 'src/images/shu.png',
    'scene10-lantern1': 'src/images/denglong.png',
    'scene10-lantern2': 'src/images/denglong2.png',
    'scene10-lantern3': 'src/images/denglong.png',
    'scene7-bridge': 'src/images/qiao.png',
    'scene7-bridge2': 'src/images/qiao-zuo.png',
    'scene7-bridge3': 'src/images/qiao-you.png',
    'scene6-leaf1': 'src/images/leaf1.png',
    'scene6-leaf2': 'src/images/leaf2.png',
    'scene6-leaf3': 'src/images/leaf3.png',
    'scene6-leaf4': 'src/images/leaf1.png',
    'scene10-leaf1': 'src/images/leaf1.png',
    'scene10-leaf2': 'src/images/leaf2.png',
    'scene10-leaf3': 'src/images/leaf3.png',
    'scene10-leaf4': 'src/images/leaf1.png',
    'scene8-car1': 'src/images/car1.png',
    'scene8-car2': 'src/images/car2.png',
    'scene8-car3': 'src/images/car3.png',
    'scene8-car4': 'src/images/car4.png',
    'scene8-car5': 'src/images/car5.png',
    'scene14-text2': 'src/images/scene14-text2.png',
    'scene13-zhifeiji': 'src/images/zhifeiji.png',
    'json1': 'src/images/data1.json',
    'json2': 'src/images/data2.json',
    'json3': 'src/images/data3.json',
    'json4': 'src/images/data4.json',
    'json5': 'src/images/data5.json',
    'json6': 'src/images/data6.json',
    'json7': 'src/images/data7.json',
    'json8': 'src/images/data8.json',
    'json9': 'src/images/data9.json',
    'json10': 'src/images/data10.json',
    'json11': 'src/images/man.json',
    'json12': 'src/images/point.json'
};

for (let name in loadList) {
    if (name.includes('json')) {
        loader.add(loadList[name]);
    } else {
        loader.add(name, loadList[name]);
    }
}

// 资源加载
loader.on("progress", function (target, resource) {
    //加载进度
    $('.home .hl-block2').css('width', parseInt(target.progress) + "%")
    $('.home .hl-text').html(parseInt(target.progress) + "%")
    $('.home .hl-icon').css('left', parseInt(target.progress) + "%")
});

// 资源加载完成
loader.on('complete', function (target) {
    document.getElementById('canvas').appendChild(app.view);
    $('.home').hide().next().show();
    initScenes(); // 初始化场景
    initSprites();  // 初始化精灵
    initAnimation(); // 初始化动画
    initTouch();//初始化触摸监听
    frameInit();// 帧动画初始化
    initClickEvent(); //初始化点击事件
});

loader.load();

function frameInit() {
    createFrame({
        url: 'src/images/man.json',
        list: ['ren01.png', 'ren02.png'],
        position: { x: 300, y: 750 },
        speed: 0.1,
        name: 'ren',
        scene: 3
    });

    // 光标1
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 360, y: 750 },
        speed: 0.1,
        name: 'point1',
        scene: 1,
        buttonMode: true,
        interactive: true,
    });

    // 光标2
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 280, y: 320 },
        speed: 0.1,
        name: 'point2',
        scene: 3,
        buttonMode: true,
        interactive: true,
    });

    // 光标3
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 438, y: 492 },
        speed: 0.1,
        name: 'point3',
        scene: 5,
        buttonMode: true,
        interactive: true,
    });

    // 光标4
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 590, y: 1050 - 50 },
        speed: 0.1,
        name: 'point4',
        scene: 6,
        buttonMode: true,
        interactive: true,
    });

    // 光标5
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 140, y: 200 - 230 },
        speed: 0.1,
        name: 'point5',
        scene: 7,
        buttonMode: true,
        interactive: true,
    });

    // 光标6
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 380, y: 1300 - 200 - 50 },
        speed: 0.1,
        name: 'point6',
        scene: 7,
        buttonMode: true,
        interactive: true,
    });

    // 光标7
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 400, y: 450 },
        speed: 0.1,
        name: 'point7',
        scene: 8,
        buttonMode: true,
        interactive: true,
    });

    // 光标8
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 620, y: 600 },
        speed: 0.1,
        name: 'point8',
        scene: 8,
        buttonMode: true,
        interactive: true,
    });

    // 光标9
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 150, y: 650 },
        speed: 0.1,
        name: 'point9',
        scene: 12,
        buttonMode: true,
        interactive: true,
    });

    // 光标10
    createFrame({
        url: 'src/images/point.json',
        list: ['01.png', '02.png', '03.png', '04.png'],
        position: { x: 550, y: 450 },
        speed: 0.1,
        name: 'point10',
        scene: 12,
        buttonMode: true,
        interactive: true,
    });

}
function createFrame({ url, list, position, speed, name, scene, buttonMode = false, interactive = false }) {
    let id = PIXI.loader.resources[url].textures;

    //创建纹理数组
    let frames = [];

    list.forEach(item => {
        frames.push(id[item]);
    })

    //创建动画精灵
    let tar = new PIXI.extras.AnimatedSprite(frames);
    //设置动画精灵的速度
    tar.animationSpeed = speed;
    tar.x = position.x;
    tar.y = position.y;
    tar.buttonMode = buttonMode;
    tar.interactive = interactive;

    sprites[name] = tar;
    //把动画精灵添加到舞台
    scenes['scene' + scene].addChild(tar)
    //播放动画精灵
    tar.play();
}
function initClickEvent() {
    let showIndex = [
        'scene1-house2',
        'scene3-house2',
        'scene5-house2',
        'scene6-house3',
        'scene7-house2',
        'scene7-build2',
        'scene8-build6',
        'scene8-build3',
        'scene11-build3',
        'scene11-build5',
    ];
    for (let i = 0; i < 10; i++) {
        let item = sprites['point' + (i + 1)];
        item.on('pointertap', function () {
            console.log(321321)
            if (item.is_show != 1) {
                TweenMax.to(sprites[showIndex[i]], 1.5, {
                    alpha: 1,
                    onComplete: function () {
                        //显示提示框
                        $('.modal-tips').show().children('.mt-item' + (i + 1)).fadeIn();
                        $('.ct-img' + (i + 1)).addClass('on');
                        sprites[showIndex[i]].is_show = 1;
                    }
                });
            }
        });
    }
}
function closeTips() {
    $('.modal-tips').hide().children('div').hide();
}
$('.share-bg').click(function () {
    $('.share-bg').hide();
})
function btnClick(e) {
    if ($(e).hasClass('btn-share')) {
        $('.share-bg').show();
    } else if ($(e).hasClass('ready-btn')) {
        $('.home-ready').hide();
        $('#canvas').show();
        $('.canvas-tips').css('display', 'flex');
    }else {
        alloyTouchs.stop();
        alloyTouchs.to(0);
    }
}


