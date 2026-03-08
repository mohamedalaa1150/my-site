function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CONlm6wMgz":
        Script1();
        break;
      case "6KkYe97ksKq":
        Script2();
        break;
      case "5dGrLFOG5DH":
        Script3();
        break;
      case "6DPmRXjkxzN":
        Script4();
        break;
      case "6C5QbUtawjZ":
        Script5();
        break;
      case "6UM0jVSUX1H":
        Script6();
        break;
      case "6963hxyHOVJ":
        Script7();
        break;
      case "6EfGfLNQinG":
        Script8();
        break;
      case "6iuBAjIcBK9":
        Script9();
        break;
      case "6jI8BzF7L2e":
        Script10();
        break;
      case "5WjUmyIpTQg":
        Script11();
        break;
      case "6VWmObilaF8":
        Script12();
        break;
      case "5Vjy9QWnXRg":
        Script13();
        break;
      case "6ZUDx2DKAGR":
        Script14();
        break;
      case "6Ykt9MGq1vV":
        Script15();
        break;
      case "5u9JjDusscG":
        Script16();
        break;
      case "5j4nbglbKkl":
        Script17();
        break;
      case "5mxfUYfX1lt":
        Script18();
        break;
      case "5xN9jpV3S2a":
        Script19();
        break;
      case "6rJbn5cQCj9":
        Script20();
        break;
      case "5aT25Cj5pu8":
        Script21();
        break;
      case "5pgxorDRXMy":
        Script22();
        break;
      case "5UsgcE2MU2t":
        Script23();
        break;
      case "6LZdtHHjiWb":
        Script24();
        break;
      case "6LYlSw1gIHj":
        Script25();
        break;
      case "5b91J5IbhV9":
        Script26();
        break;
      case "6n6LP0DunUZ":
        Script27();
        break;
      case "6ZE1cupP0UC":
        Script28();
        break;
      case "5k6SzVrMWSr":
        Script29();
        break;
      case "6PVUDxnc7g9":
        Script30();
        break;
      case "683llAFEnDa":
        Script31();
        break;
      case "5raNKoj033Z":
        Script32();
        break;
      case "6OkxEHqPO0z":
        Script33();
        break;
      case "6LVDhO7pfos":
        Script34();
        break;
      case "6p3euZ1ndlN":
        Script35();
        break;
      case "6arAum3QN2r":
        Script36();
        break;
      case "5XrN7IUHIUN":
        Script37();
        break;
      case "6my4ktiSqSH":
        Script38();
        break;
      case "6Zz2zcLd8fG":
        Script39();
        break;
      case "5ndtJCOUnVG":
        Script40();
        break;
      case "6h5QP3bgq2Z":
        Script41();
        break;
      case "6X1IgAEzGEE":
        Script42();
        break;
      case "6nrY97xyXAx":
        Script43();
        break;
      case "6VBb9Cgz6TU":
        Script44();
        break;
      case "66mlpMCCjok":
        Script45();
        break;
      case "6pqcdXqiL12":
        Script46();
        break;
      case "6OICmD8UvkC":
        Script47();
        break;
      case "5owgkr3l92s":
        Script48();
        break;
      case "6Sq4iPBh0cq":
        Script49();
        break;
      case "5gtODUO1A6r":
        Script50();
        break;
      case "6VaUDW14N2r":
        Script51();
        break;
      case "6Gfbgfbsh2x":
        Script52();
        break;
      case "62HDVsiShOJ":
        Script53();
        break;
      case "5Zuyi9s0tG0":
        Script54();
        break;
      case "5W6oPihUjiG":
        Script55();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5Vx9Xj8dyM8');
const duration = 1000;
const easing = 'ease-out';
const id = '6ESL64NDp5K';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5Vx9Xj8dyM8');
const duration = 1000;
const easing = 'ease-out';
const id = '6ESL64NDp5K';
const pulseAmount = 0.03;
const delay = 2500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5Vx9Xj8dyM8');
const duration = 2000;
const easing = 'ease-out';
const id = '6MjnXslfiHV';
const teeterAmount = 10;
const delay = 2500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5Vx9Xj8dyM8');
const duration = 2000;
const easing = 'ease-out';
const id = '6MjnXslfiHV';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6Vdettx3gWJ');
const duration = 750;
const easing = 'ease-out';
const id = '6BTczAazIXV';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6Vdettx3gWJ');
const duration = 750;
const easing = 'ease-out';
const id = '6BTczAazIXV';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6EA3sdJnGf9');
const duration = 750;
const easing = 'ease-out';
const id = '6p1wtuD5WK9';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6EA3sdJnGf9');
const duration = 750;
const easing = 'ease-out';
const id = '6p1wtuD5WK9';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('69mUn2t4fAr');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5el0jCJ5D5S');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5el0jCJ5D5S');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6oJHcSlIdpd');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('5h0o88OXVvQ');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6bgVuazm0FX');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6PLYoBjZ1M5');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6HdULvxELsr');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('63VAChd13nh');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6J6fghjSoqM');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6IfmKvAShZk');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6cTTyXFMMlk');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('5k28ONDf0sH');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  player.once(() => {
const target = object('65KFmkyGn8N');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 500;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('6P775xO1hJ4');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 1000;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('6HGZMuIeHV7');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6LCuWkBTZfS';
const growAmount = 1.2;
const delay = 1500;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  const target = object('6TScxgA92FR');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5z0MPjGQP45';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6jR615nf4XR');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6jR615nf4XR');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('5XYlO4V2mER');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('5ZTvp8FRnqC');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  player.once(() => {
const target = object('6gh7CpgEve5');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  player.once(() => {
const target = object('6eRIFUUWg1g');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  player.once(() => {
const target = object('6K1Edh9maTx');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6oSvcFWg179');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  player.once(() => {
const target = object('6qxmn4FNa4x');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  player.once(() => {
const target = object('60zwDl6Ue4W');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  const target = object('5sw0fDfYKkj');
const duration = 750;
const easing = 'ease-out';
const id = '5vr9jRaaMXk';
const tiltAmount = 6;
player.addForTriggers(
id,
target.animate(
[ {rotate: `${tiltAmount}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6ghsSC7H7ZV');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6ghsSC7H7ZV');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  player.once(() => {
const target = object('6nN0Av9Eum5');
const duration = 500;
const easing = 'ease-out';
const id = '6mpla33PlKl';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  player.once(() => {
const target = object('5jr29Wf0DD6');
const duration = 500;
const easing = 'ease-out';
const id = '6Q6Va4zjy5V';
const teeterAmount = 4;
const delay = 1125;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6CHGsIuL2nM');
const duration = 500;
const easing = 'ease-out';
const id = '6Ap77HTRShQ';
const teeterAmount = 4;
const delay = 1750;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  player.once(() => {
const target = object('5foZ37kgkF1');
const duration = 500;
const easing = 'ease-out';
const id = '6TDtgUbZWLS';
const teeterAmount = 4;
const delay = 2375;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script43 = function()
{
  player.once(() => {
const target = object('6CSc24dTFSh');
const duration = 500;
const easing = 'ease-out';
const id = '6jpRTw6MS4j';
const teeterAmount = 4;
const delay = 3000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  player.once(() => {
const target = object('5pEFKc3PJ74');
const duration = 500;
const easing = 'ease-out';
const id = '60o87jabgzF';
const teeterAmount = 4;
const delay = 3625;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  const target = object('60wVwnsNrAm');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6YsAY9SptFD';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6HnBJtVT7Hp');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6HnBJtVT7Hp');
const duration = 1250;
const easing = 'ease-out';
const id = '6ltUf8ycvRh';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  player.once(() => {
const target = object('6TRIoGdX2qL');
const duration = 750;
const easing = 'ease-out';
const id = '5uwQS6whNlV';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script49 = function()
{
  player.once(() => {
const target = object('5l0nJTVNjEj');
const duration = 750;
const easing = 'ease-out';
const id = '6mtVUkHZVs0';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  player.once(() => {
const target = object('6eU0u09g4nW');
const duration = 1000;
const easing = 'ease-out';
const id = '63xCk5EnCeU';
const teeterAmount = 2;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script51 = function()
{
  player.once(() => {
const target = object('6lMqe9VqDvG');
const duration = 1000;
const easing = 'ease-out';
const id = '6pIJiQ25ewf';
const teeterAmount = 4;
const delay = 500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  player.once(() => {
const target = object('5b7NtHfBWyq');
const duration = 1000;
const easing = 'ease-out';
const id = '5X9OUAH6WS1';
const teeterAmount = 2;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  player.once(() => {
const target = object('5avU6lhI8cL');
const duration = 1000;
const easing = 'ease-out';
const id = '5V412ZHRMDT';
const teeterAmount = 4;
const delay = 1000;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script54 = function()
{
  player.once(() => {
const target = object('6SE3kg92syl');
const duration = 1000;
const easing = 'ease-out';
const id = '5g3or9YL6nf';
const teeterAmount = 2;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script55 = function()
{
  player.once(() => {
const target = object('5WvmgF4CgcY');
const duration = 1000;
const easing = 'ease-out';
const id = '5msOw2m6xzk';
const teeterAmount = 4;
const delay = 1500;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
