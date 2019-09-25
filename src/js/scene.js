const scenesList = [ // 场景数据：定义每个场景的宽高,x/y距离
  {
    name: 'scene1',
    width: 750,
    height: 1300,
    x: 0,
    y: 0,
  },
  {
    name: 'scene2',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300,
  },
  {
    name: 'scene3',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 2,
  },
  {
    name: 'scene4',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 3,
  },
  {
    name: 'scene5',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 4,
  },
  {
    name: 'scene6',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 5,
  },
  {
    name: 'scene7',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 6,
  },
  {
    name: 'scene8',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 7,
  },
  {
    name: 'scene9',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 8,
  },
  {
    name: 'scene10',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 9,
  },
  {
    name: 'scene11',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 10,
  },
  {
    name: 'scene12',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 11,
  },
  {
    name: 'scene13',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 12,
  },
  {
    name: 'scene14',
    width: 750,
    height: 1300,
    x: 0,
    y: 1300 * 13,
  },
  {
    name: 'scene15',
    width: 750,
    height: 2618,
    x: 0,
    y: 1300 * 14,
  },
];


let scenes = {};
function initScenes() {
  //这里不能用forEach来循环 因为scene2会遮挡scene1的场景 必须使用for来倒序
  for (let i = 0; i <= scenesList.length - 1; i++) {
    let item = scenesList[i];
    scenes[item.name] = new PIXI.Container({
      width: item.width,
      height: item.height
    });
    scenes[item.name].x = item.x;
    scenes[item.name].y = item.y;
    app.stage.addChild(scenes[item.name]);
  }
}
